import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.css';
import {TMenuItem,IRightMenu } from './interface'
export default function RightMenu(props: IRightMenu) {
  const {
    visibility,
    position = [0, 0],
    menuItems,
    classnames = '',
    seeState,
    children,
    onCancel,
  } = props;

  const [visible, changeVisible] = useState(false);
  const [pos, updatePos] = useState(position);

  const tempRef = useRef<HTMLDivElement | null>(null);
  const originInfo = useRef({
    xMin: 0,
    xMax: 0,
    yMin: 0,
    yMax: 0,
  });

  // 绑定右键事件到父元素
  useEffect(() => {
    if (!seeState) return;
    const parentNode = tempRef.current!;
    const parentPos = parentNode.getBoundingClientRect();
    originInfo.current = {
      xMin: parentPos.x,
      xMax: parentPos.x + parentPos.width,
      yMin: parentPos.y,
      yMax: parentPos.y + parentPos.height,
    };

    function handleRightClick(e: any) {
      e.preventDefault();
      changeVisible(true);
      updatePos([e.clientX, e.clientY]);
    }

    if (parentNode !== null) {
      parentNode.addEventListener('contextmenu', handleRightClick);
    }

    return () => {
      parentNode.removeEventListener('contextmenu', handleRightClick);
    };
  }, [seeState]); // 添加 seeState 作为依赖，在页面状态切换时能更新响应逻辑

  function showContextMenu(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    const { xMin, xMax, yMin, yMax } = originInfo.current;
    if (
      e.clientX >= xMin &&
      e.clientX <= xMax &&
      e.clientY >= yMin &&
      e.clientY <= yMax
    ) {
      updatePos([e.clientX, e.clientY]);
    }
  }

  function handleMenuItemClick() {
    if (typeof onCancel === 'function') {
      onCancel(false);
    }
    changeVisible(false);
  }

  const menuItemRender = useMemo(() => {
    // 点击右键的某个item
    function clickMenuItem(
      e: React.MouseEvent<HTMLLIElement, MouseEvent>,
      menu: TMenuItem,
    ) {
      e.stopPropagation();
      if (menu.disable) {
        return;
      }
      menu.onClick();
      changeVisible(false);
      if (typeof onCancel === 'function') {
        onCancel(false);
      }
    }

    return menuItems.map((menu) => (
      <li
        className={menu.disable ? 'disable-menu' : ''}
        onClick={(e) => clickMenuItem(e, menu)}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        key={menu.key}
      >
        <span className="icons">{menu.icon ?? ''}</span>
        <span>&nbsp;&nbsp;{menu.label}</span>
      </li>
    ));
  }, [menuItems, onCancel]);

  return (
    <div
      ref={tempRef}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <>
        {children}
        {createPortal(
          <div
            className={`right-menu-wrapper${
              visibility || visible ? ' right-menu-wrapper-show' : ''
            }`}
            onClick={handleMenuItemClick}
            onContextMenu={showContextMenu}
          >
            <div
              className={`right-menu-container ${classnames}`}
              style={
                visibility
                  ? { top: position[1], left: position[0] + 10 }
                  : { top: pos[1], left: pos[0] + 10 }
              }
            >
              <ul>{menuItemRender}</ul>
            </div>
          </div>,
          document.body,
        )}
      </>
    </div>
  );
}
