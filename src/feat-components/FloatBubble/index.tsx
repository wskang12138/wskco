import React, {
  CSSProperties,
  SyntheticEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import ic_modules from '../../images/svg/modules.svg';
import { FloatBubbleProps } from './interface';
import classNames from 'classnames';
import CloseIcon from '../CloseIcon';
import './_index.scss';
// 点击事件触发最大时间差
const clickDiff = 150;

// 悬浮窗弹性区域
const bound = 200;

// 悬浮窗拉伸缩放弹性
const scaleBound = { x: 2, y: 4 };

const FloatBubble = React.memo(function (props: FloatBubbleProps) {
  /**
   * @属性
   */

  const { isExpand, onChangeExpand, children } = props;

  // 组件起始位置
  const initialPosition = { top: 200, left: 0 };

  // 悬浮窗位置
  const [position, setPosition] = useState(initialPosition);

  // 悬浮窗样式
  const [bubbleStyle, setBubbleStyle] = useState<CSSProperties | undefined>();

  // 拖动中
  const [isDrag, setIsDrag] = useState(false);

  // 悬浮窗位置缓存
  const positionCache = useRef(initialPosition);

  // 元素节点
  const elementRef = useRef<HTMLDivElement | null>(null);

  // 鼠标点击起始位置
  const startPosition = useRef({ clientX: 0, clientY: 0 });

  // 鼠标点击开始时间
  const startTime = useRef(0);

  /**
   * @方法
   */

  // 鼠标结束移动事件
  const onMouseUp = useCallback(
    (e: any) => {
      setIsDrag(false);
      // 元素尺寸
      const elementWidth = isExpand
        ? elementRef.current?.clientWidth ?? 0
        : 128;
      const elementHeight = elementRef.current?.clientHeight ?? 0;
      // 屏幕尺寸
      const clientWidth = window.innerWidth;
      const clientHeight = window.innerHeight;
      // 最大位置
      const maxTop = Math.max(clientHeight - elementHeight, 0);
      const maxLeft = clientWidth - elementWidth;
      // 移动距离
      const moveX = e.clientX - startPosition.current.clientX;
      const moveY = e.clientY - startPosition.current.clientY;
      // 顶部
      const top = Math.min(
        Math.max(positionCache.current.top + moveY, 0),
        maxTop,
      );
      const left = Math.min(
        Math.max(positionCache.current.left + moveX, 0),
        maxLeft,
      );
      /**距离两边距离 */
      const offsetLeft = left;
      const offsetRight = clientWidth - (left + elementWidth);
      // 新位置
      const _position = {
        top,
        left: !isExpand
          ? offsetLeft < bound
            ? 0
            : offsetRight < bound
            ? maxLeft
            : left
          : left,
      };
      // 高度
      const transform = '';
      // 边框圆角
      const borderRadius =
        offsetLeft < bound
          ? '0 32px 32px 0'
          : offsetRight < bound
          ? '32px 0 0 32px'
          : '32px';
      // 悬浮窗弹性样式
      const _bubbleStyle = { transform, borderRadius };
      setBubbleStyle(_bubbleStyle);
      // 更新组件位置
      setPosition(_position);
      // 更新缓存位置
      positionCache.current = _position;
      // 清空绑定
      window.onmousemove = null;
      window.onmouseup = null;
    },
    [isExpand],
  );

  // 鼠标移动事件
  const onMouseMove = useCallback(
    (e: any) => {
      // 元素尺寸
      const elementWidth = elementRef.current?.clientWidth ?? 0;
      const elementHeight = elementRef.current?.clientHeight ?? 0;
      // 屏幕尺寸
      const clientWidth = window.innerWidth;
      const clientHeight = window.innerHeight;
      // 最大位置
      const maxTop = Math.max(clientHeight - elementHeight, 0);
      const maxLeft = clientWidth - elementWidth;
      // 移动距离
      const moveX = e.clientX - startPosition.current.clientX;
      const moveY = e.clientY - startPosition.current.clientY;
      // 顶部
      const top = Math.min(
        Math.max(positionCache.current.top + moveY, 0),
        maxTop,
      );
      const left = Math.min(
        Math.max(positionCache.current.left + moveX, 0),
        maxLeft,
      );
      /**距离两边距离 */
      const offsetLeft = left;
      const offsetRight = clientWidth - (left + elementWidth);
      // 新位置
      const _position = {
        top,
        left: !isExpand
          ? offsetLeft < bound
            ? 0
            : offsetRight < bound
            ? maxLeft
            : left
          : left,
      };
      // 缩放
      const transform =
        offsetLeft < bound
          ? `scale(${1 + offsetLeft / (bound * scaleBound.x)}, ${
              1 - offsetLeft / (bound * scaleBound.y)
            })`
          : offsetRight < bound
          ? `scale(${1 + offsetRight / (bound * scaleBound.x)}, ${
              1 - offsetRight / (bound * scaleBound.y)
            })`
          : '';
      // 边框圆角
      const borderRadius =
        offsetLeft < bound
          ? '0 32px 32px 0'
          : offsetRight < bound
          ? '32px 0 0 32px'
          : '32px';
      // 缩放位置
      const transformOrigin = offsetLeft < bound ? '0 50%' : '100% 50%';
      // 更新悬浮窗弹性样式
      const _bubbleStyle = { transform, borderRadius, transformOrigin };

      if (
        (!isExpand && offsetLeft > bound && offsetRight > bound) ||
        isExpand
      ) {
        setIsDrag(true);
      }

      setBubbleStyle(_bubbleStyle);
      // 更新组件位置
      setPosition(_position);
    },
    [isExpand],
  );

  // 鼠标点击事件
  const onMouseDown = useCallback(
    (e: any) => {
      // 更新鼠标点击起始位置
      startPosition.current = {
        clientX: e.clientX,
        clientY: e.clientY,
      };
      // 更新鼠标点击开始时间(防止松开时触发点击事件)
      startTime.current = Date.now();

      // 绑定移动事件
      window.onmousemove = onMouseMove;
      window.onmouseup = onMouseUp;
    },
    [onMouseMove, onMouseUp],
  );

  // 弹窗展开事件
  const onExpandWrapper = useCallback(() => {
    // 元素尺寸
    console.log('55555555');
    const elementWidth = 350;
    const elementHeight = 534;
    // 屏幕尺寸
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    // 如果位置离右边小于弹窗宽度，吸附
    if (clientWidth - (position.left + elementWidth) < 0) {
      const _position = {
        ...positionCache.current,
        left: clientWidth - elementWidth,
      };
      // 更新位置
      setPosition(_position);
      // 更新缓存位置
      positionCache.current = _position;
    }
    // 如果位置离底部小于弹窗宽度，吸附
    if (clientHeight - (position.top + elementHeight) < 0) {
      const _position = {
        ...positionCache.current,
        top: Math.max(clientHeight - elementHeight, 0),
      };
      // 更新位置
      setPosition(_position);
      // 更新缓存位置
      positionCache.current = _position;
    }
    onChangeExpand?.(true);
  }, [onChangeExpand, position]);

  // 关闭弹窗事件
  const onClose = useCallback(
    (e: SyntheticEvent<any>) => {
      // 阻止冒泡
      e.stopPropagation();
      // 元素尺寸
      const elementWidth = elementRef.current?.clientWidth ?? 0;
      // 屏幕尺寸
      const clientWidth = window.innerWidth;
      // 如果位置靠边，吸附
      if (position.left < bound) {
        const _position = { ...positionCache.current, left: 0 };
        // 更新位置
        setPosition(_position);
        // 更新缓存位置
        positionCache.current = _position;
      } else if (clientWidth - (position.left + elementWidth) < bound) {
        const _position = { ...positionCache.current, left: clientWidth - 128 };
        // 更新位置
        setPosition(_position);
        // 更新缓存位置
        positionCache.current = _position;
      }
      onChangeExpand?.(false);
    },
    [onChangeExpand, position],
  );

  // 展开弹窗
  const expandPopLayer = useCallback(() => {
    // 点击事件时间差
    console.log('888888888');
    const diff = Date.now() - startTime.current;
    !isExpand && diff < clickDiff && onExpandWrapper();
  }, [isExpand, onExpandWrapper]);

  // 关闭事件
  const retractPopLayer = useCallback(
    (e: any) => {
      // 点击事件时间差
      const diff = Date.now() - startTime.current;
      isExpand && diff < clickDiff && onClose(e);
    },
    [isExpand, onClose],
  );

  /**
   * @节点
   */

  return (
    <div
      ref={elementRef}
      className={classNames('root', isExpand ? 'isExpand' : 'isRetract')}
      onClick={expandPopLayer}
      style={
        !isExpand
          ? {
              ...bubbleStyle,
              top: `${position.top}px`,
              left: `${position.left}px`,
            }
          : {
              top: `${position.top}px`,
              left: `${position.left}px`,
            }
      }
    >
      <div
        className={classNames('root__header')}
        onMouseDown={onMouseDown}
        style={{ cursor: isDrag ? 'move' : 'pointer' }}
      >
        <div className={classNames('header-left')}>
          <img
            className={classNames('header-left__icon')}
            alt=""
            src={ic_modules}
            draggable={false}
          />
          悬浮
          {isExpand && (
            <span className={classNames('header-left__sub-title')}>
              &nbsp;- 首页
            </span>
          )}
        </div>
        <CloseIcon
          className={classNames('header-right')}
          onClose={retractPopLayer}
        />
      </div>
      <div className={classNames('root__content')}>{children}</div>
    </div>
  );
});
export default FloatBubble;
