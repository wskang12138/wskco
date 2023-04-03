import React, { ReactElement } from 'react';

type OutlineProps = {
    /**
     * @description 容器高度
     */
    width: number;
    /**
     * @description 容器宽度
     */
    height: number;
    /**
     * @description 注入自定义样式。可用于重写自定义动画
     */
    className?: string;
    /**
     * @description 线条样式
     */
    rectStyle?: object;
    /**
     * @description 子元素
     * @default (required)
     */
    children: ReactElement;
}

export {OutlineProps}