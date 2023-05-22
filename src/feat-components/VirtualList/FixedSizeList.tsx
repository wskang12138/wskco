import React, { createElement, useState } from 'react';
import { FixedSizeListProps } from './interface';

const FixedSizeList: React.FC<FixedSizeListProps> | null = ({
  children,
  width,
  height,
  itemCount,
  itemSize,
}) => {
  if (!height || !itemCount || !itemSize || typeof children !== 'function') {
    console.error('请按要求设置属性');
    return null;
  }

  // 开始节点 index
  const [startIndex, setStartIndex] = useState(0);
  // 偏移量
  const [startOffset, setStartOffset] = useState(0);
  // 可视区域节点个数
  const visibleCount = Math.ceil(height / itemSize);
  // 结束节点 index
  const endIndex = startIndex + visibleCount;
  // 总高度 -> 计算滑动条
  const actualHeight = itemCount * itemSize;

  // 每行元素样式
  const getItemStyle = () => {
    return {
      height: itemSize,
      width: '100%',
    };
  };

  const onScroll = (event: any) => {
    // 获取滑动条位置
    const scrollTop = event.target.scrollTop;
    // 计算起始节点
    setStartIndex(Math.floor(scrollTop / itemSize));
    // 计算偏移量
    setStartOffset(scrollTop - (scrollTop % itemSize));
  };

  const render = () => {
    const items = [];
    for (let index = startIndex; index < endIndex; index++) {
      items.push(
        createElement(children, {
          index,
          style: getItemStyle(),
          key: index,
        }),
      );
    }
    return items;
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'auto',
        willChange: 'transform',
        width,
        height,
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
          transform: `translateY(${startOffset}px)`,
        }}
      >
        {render()}
      </div>
    </div>
  );
};

export default FixedSizeList;
