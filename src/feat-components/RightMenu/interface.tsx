type TMenuItem = {
     /**
     * @description key唯一值
     */
    key: number | string;
    /**
     * @description 标题
     */
    label: string;
    /**
     * @description 右键点击
     */
    onClick: () => void;
    /**
     * @description 图标
     */
    icon?: React.ReactNode;
    /**
     * @description 是否禁用
     */
    disable?: boolean;
};

type IRightMenu = {
    /**
     * @description 菜单项
     */
    menuItems: TMenuItem[];
    /**
     * @description 子节点
     */
    children?: React.ReactNode;
    /**
     * @description 受控显隐
     */
    visibility?: boolean;
     /**
     * @description 受控显示位置
     */
    position?: [number, number];
    /**
     * @description 外层样式
     */
    classnames?: string;
   /**
     * @description 是否让父组件刷新，或是手动刷新
     */
    seeState?: boolean; 
    /**
     * @description 关闭的回调
     */
    onCancel?: (v: boolean) => void;
}
export {TMenuItem,IRightMenu }