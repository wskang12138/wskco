/**
 * 整体思路
 * 1. 将传入的 children 全部拷贝并添加拖拽属性/方法
 * 2. 当触发拖拽事件（dragStart）时，隐藏原元素，拷贝副本作为拖拽动画
 *  a. 通过 createPortal 将副本元素挂载到 body 上
 *  b. 副本元素位置通过 fakeVDOMAxis 属性来设置
 *  c. 全局监听 dragOver 事件，通过鼠标位置计算元素位置，从而更新 fakeVDOMAxis -> 触发视图更新
 * 3. 拖拽完成后触发 dragEnd 事件，进行收尾逻辑
 * 4. 开放 onChange 回调，并传入更新后的虚拟 DOM 列表，交换元素的 index 值
 * 5. 开放 onDragEnd 回调，对应原生事件
 *
 * 待优化项
 * 1. 拖拽过程中每调用一次 protal 方法，都会重新生成一个虚拟节点，无法复用原有节点，造成资源浪费
 *
 */
import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { DragProps } from './interface'

const DragList: React.FC<DragProps> = ({
  children,
  onChange = (newVal: ReactElement[], fromIndex: number, toIndex: number) => {},
  onDragEnd = () => {},
}) => {
  // 传入非数组直接返回
  if (!Array.isArray(children)) return children;

  // 用于更新视图
  const [data, setData] = useState(children);
  // 记录鼠标选中拖拽的元素
  const currentDragIndex = useRef(-1);
  // 拖拽过程中隐藏原拖拽元素（占位），通过替代元素实现拖拽效果
  const fakeVDOM = useRef<null | ReactElement>(null);
  // 记录位置
  const [fakeVDOMAxis, setFakeVDOMAxis] = useState([0, 0]);
  const offsetAxis = useRef([0, 0]);

  // 加工属性
  const addProps = useCallback(
    (el: any, index: number) => ({
      draggable: true,
      onDragStart: function (event: DragEvent) {
        currentDragIndex.current = index;

        // 样式优化
        // 去除原生默认预览图
        const img = new Image();
        img.src =
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' %3E%3Cpath /%3E%3C/svg%3E";
        event.dataTransfer && event.dataTransfer.setDragImage(img, 0, 0);

        // 获取点击的真实 DOM 元素 -> 获取宽高 -> 隐藏并占位
        const { target: _DOM, clientX, clientY } = event;
        const { offsetWidth, offsetHeight } = _DOM as HTMLElement;
        const { left, top } = (_DOM as HTMLElement).getBoundingClientRect();
        offsetAxis.current = [clientX - left, clientY - top];

        // 获取虚拟 DOM 元素 -> 拷贝副本覆盖原来
        const _vDOM = el;

        if (isValidElement(_vDOM as ReactElement)) {
          const _fakeVDOM = cloneElement(_vDOM, {
            style: {
              ..._vDOM.props.style,
              position: 'fixed',
              width: offsetWidth + 'px',
              height: offsetHeight + 'px',
              left: 0,
              top: 0,
              zIndex: 999,
              pointerEvents: 'none',
              transform: `translate3d(${~~left}px, ${~~top}px, 0)`,
              cursor: 'pointer',
            },
          });
          fakeVDOM.current = _fakeVDOM;
          setFakeVDOMAxis([~~left, ~~top]);
        }
      },
      // 通过 onDragOver 获取实时设置替代元素的位置
      onDragOver: (event: DragEvent) => {
        // 调整鼠标样式
        event.preventDefault();

        // 隐藏原元素 -> 占位
        const { target: _DOM } = event;
        if (_DOM) {
          (_DOM as HTMLElement).style.visibility = 'hidden';
        }
      },
      onDragEnter: (event: DragEvent) => {
        // 调整鼠标样式
        event.preventDefault();

        // 边界判断
        if (
          currentDragIndex.current === -1 ||
          currentDragIndex.current === index
        )
          return;

        const fromIndex = currentDragIndex.current;
        const toIndex = index;

        currentDragIndex.current = index;

        setData((data) => {
          // 浅拷贝
          const newVal = [...data];
          // 调整位置
          const el = newVal.splice(fromIndex, 1)[0];
          newVal.splice(toIndex, 0, el);

          if (typeof onChange === 'function') {
            onChange(newVal, fromIndex, toIndex);
          }

          return newVal;
        });
      },
      onDragEnd: (event: DragEvent) => {
        currentDragIndex.current = -1;

        // 获取点击的真实 DOM 元素 -> 获取宽高 -> 隐藏并占位
        const _DOM = event.target;
        (_DOM as HTMLElement).style.visibility = 'visible';
        fakeVDOM.current = null;
        setFakeVDOMAxis([0, 0]);

        if (typeof onDragEnd === 'function') {
          onDragEnd();
        }
      },
    }),
    [],
  );

  useEffect(() => {
    function calculateFakeDOMPosition(event: DragEvent) {
      // 调整鼠标样式
      event.preventDefault();
      event.dataTransfer && (event.dataTransfer.effectAllowed = 'move');

      // 获取鼠标位置 -> 计算替代元素位置
      const { clientX, clientY } = event;
      const left = ~~(clientX - offsetAxis.current[0]);
      const top = ~~(clientY - offsetAxis.current[1]);
      setFakeVDOMAxis([left, top]);
    }

    document.addEventListener('dragover', calculateFakeDOMPosition);
    return () => {
      document.removeEventListener('dragover', calculateFakeDOMPosition);
    };
  }, []);

  // 加工传入的子元素
  const render = () => {
    return data.map((el, idx) => {
      // 非可用元素直接返回
      if (!isValidElement(el)) return el;
      // 可用元素加工后返回
      return cloneElement(el, addProps(el, idx));
    });
  };

  const portal = () => {
    if (fakeVDOM.current) {
      const _fakeVDOM = cloneElement(fakeVDOM.current, {
        style: {
          ...fakeVDOM.current.props.style,
          transform: `translate3d(${fakeVDOMAxis[0]}px, ${fakeVDOMAxis[1]}px, 0)`,
        },
      });
      fakeVDOM.current = _fakeVDOM;
      return createPortal(_fakeVDOM, document.body);
    }
    return null;
  };

  return (
    <>
      {render()}
      {portal()}
    </>
  );
};

export default DragList;
