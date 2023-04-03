/**
 * 整体思路：
 * 1. 根据预估行高、数据长度计算得到总高度 -> 撑开容器，展示滚动条
 * 2. 维护一个列表用于计算元素位置
 * 3. 滚动时根据真实 DOM 更新上述列表，从而修正元素位置
 */

import React, { createElement, useRef, useState } from 'react';
import {VariableSizeListProps} from './interface'

const VariableSizeList: React.FC<VariableSizeListProps> | null = ({
  children,
  width,
  height,
  itemCount,
  itemSize = 50
}) => {
  if (!height || !itemCount || !itemSize || typeof children !== 'function') {
    console.error('请按要求设置属性');
    return null;
  }

  // 开始节点 index
  const [startIndex, setStartIndex] = useState(0);
  // 偏移量
  const [startOffset, setStartOffset] = useState(0);
  // 记录元素的位置、高度
  const [position, setPosition] = useState(
    new Array(itemCount).fill(0).map((_, idx) => ({
      index: idx,
      top: idx * itemSize,
      bottom: (idx + 1) * itemSize,
      height: itemSize,
      isComputed: false
    }))
  );
  // 结束节点 index
  const _endIndex = position.findIndex(
    (i) => i.bottom >= position[startIndex].top + height
  );
  const endIndex = _endIndex > -1 ? _endIndex : position.length - 1;
  // 存储对应元素
  const elements = useRef<HTMLElement[]>([]);
  // 总高度
  const actualHeight = position[position.length - 1].bottom;

  // 每行元素样式
  const getItemStyle = () => {
    return {
      width: '100%'
    };
  };

  const onScroll = (event: any) => {
    // 获取当前可视窗口节点
    const currentEls: HTMLElement[] = Array.from(
      event.target.children[1].children
    );
    currentEls.forEach((_el) => {
      const _index = Number(_el.getAttribute('data-index') || 0);
      elements.current[_index] = _el;
    });
    // 获取滑动条位置
    const scrollTop = event.target.scrollTop;
    // 计算起始节点
    const _startIndex = position.findIndex((i) => i.top >= scrollTop);
    setStartIndex(_startIndex);
    // 计算偏移量
    setStartOffset(_startIndex >= 1 ? position[_startIndex - 1]?.bottom : 0);
    // 更新元素位置
    updatePosition();
  };

  const render = () => {
    const items = [];
    for (let index = startIndex; index <= endIndex; index++) {
      items.push(
        createElement(children, {
          index,
          style: getItemStyle(),
          key: index,
          'data-index': index
        })
      );
    }
    return items;
  };

  // 更新元素位置
  const updatePosition = () => {
    setPosition((_position) => {
      for (let index = startIndex; index < _position.length; index++) {
        // 已计算直接跳过
        if (_position[index].isComputed) break;
        // 无对应真实 DOM 跳过
        const el = elements.current[index];
        if (!el) break;

        const target = _position[index];
        // 通过真实 DOM 高度来更新元素高度
        target.height = el.clientHeight;
        index > 0 && (target.top = _position[index - 1].bottom);
        target.bottom = target.top + target.height;
        target.isComputed = true;
      }
      return _position;
    });
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'auto',
        willChange: 'transform',
        width,
        height
      }}
      onScroll={onScroll}
    >
      <div style={{ height: actualHeight }} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: `translateY(${startOffset}px)`
        }}
      >
        {render()}
      </div>
    </div>
  );
};

export default VariableSizeList;
