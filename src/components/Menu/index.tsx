import React, {
  FC,
  useState,
  useEffect,
  memo,
  useCallback,
  // useContext,
  CSSProperties,
} from 'react';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
// import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from 'classnames';
// import { globalCtx } from '../GlobalConfig';

interface MenuProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 配置对象
   * @default {}
   */
  items: Array<RenderOptions>;
  /**
   * @description 自定义宽度
   * @default 220px
   */
  width?: string | number;
  /**
   * @description 手风琴
   * @default false
   */
  ableToggle?: Boolean;
  /**
   * @description 默认展开
   * @default false
   */
  defaultOpen?: Boolean;
  /**
   * @description 切换菜单回调函数
   */
  onSelect?: Function;
  /**
   * @description 主题颜色
   * @default 'light'
   */
  theme?: 'light' | 'dark';
}
interface MenuHeightProps {
  key: string;
  height: string;
  childNum: number | string;
  level: number;
  children?: Array<Object>;
}
interface RenderOptions {
  label: string;
  key: string | number;
  level?: string | number;
  icon?: JSX.Element | null;
  children?: Array<any> | null | undefined;
}

const Menu: FC<MenuProps> = (props: MenuProps) => {
  const [nowActiveMainKey, setNowActiveMainKey] = useState(''); // 选中的一级菜单key
  const [nowActiveKey, setNowActiveKey] = useState(''); // 选中的子菜单key
  const [parentMenuHeightList, setParentMenuHeightList] = useState<any>({}); // 父菜单高度集合

  const {
    items,
    className,
    width = 220,
    ableToggle,
    defaultOpen,
    onSelect,
    style,
    theme = 'light',
  } = props;

  const menuItemHeight = 50;
  // const { globalColor, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs('menu', className, {
    [`menu-${theme}`]: theme,
  });

  useEffect(() => {
    const initList = initParentMenuHeight(items, {}, '');
    if (defaultOpen) {
      // 默认展开
      for (const key in initList) {
        initList[key].height = initList[key].childNum + 1;
        if (initList[key].children.length > 0) {
          initList[key].children.map(
            (item: any) =>
              (item.height = `${(item.childNum + 1) * menuItemHeight}px`),
          );
          initList[key].height += initList[key].children.reduce(
            (pre: MenuHeightProps, next: MenuHeightProps) => {
              return (pre.childNum as number) + (next.childNum as number);
            },
          );
        }
        initList[key].height = `${initList[key].height * menuItemHeight}px`;
      }
    }
    setParentMenuHeightList(initList);
  }, []);

  useEffect(() => {
    onSelect && onSelect(nowActiveKey);
  }, [nowActiveKey]);

  const initParentMenuHeight = (
    item: Array<RenderOptions>,
    obj: any,
    fatherKey: string | number,
  ) => {
    // 初始化父级菜单高度
    item?.forEach(m => {
      if (m.children) {
        if (m.level === 1) {
          obj[m.key] = {
            key: m.key,
            height: `${menuItemHeight}px`,
            childNum: m.children.length,
            level: m.level,
            children: [],
          };
        } else {
          obj[fatherKey]?.children.push({
            key: m.key,
            height: `${menuItemHeight}px`,
            childNum: m.children.length,
            level: m.level,
          });
        }
        initParentMenuHeight(
          m.children,
          obj,
          m.level && m.level === 1 ? m.key : '',
        );
      }
    });
    return obj;
  };

  const toggleFirstMenu = (fMenu: RenderOptions, e: any) => {
    // 点击父级菜单
    e.stopPropagation();
    const selectKey = fMenu.key;
    const refreshObject = { ...parentMenuHeightList };
    refreshObject[selectKey].height =
      refreshObject[selectKey].height === `${menuItemHeight}px`
        ? `${(refreshObject[selectKey].childNum + 1) * menuItemHeight}px`
        : `${menuItemHeight}px`;
    if (ableToggle) {
      // 手风琴折叠
      if (refreshObject[selectKey].height !== `${menuItemHeight}px`) {
        for (const key in refreshObject) {
          if (key !== selectKey) {
            refreshObject[key].height = `${menuItemHeight}px`;
            if (refreshObject[key].children) {
              refreshObject[key].children.map(
                (item: MenuHeightProps) =>
                  (item.height = `${menuItemHeight}px`),
              );
            }
          }
        }
      }
    } else {
      // 普通折叠
      if (refreshObject[selectKey].children.length !== 0) {
        refreshObject[selectKey].children.forEach((c: MenuHeightProps) => {
          c.height = `${menuItemHeight}px`;
        });
      }
    }
    setParentMenuHeightList(refreshObject);
  };

  const toggleChildMenu = (cMenu: RenderOptions, e: any, fKey: string) => {
    // 点击子级菜单
    if ((cMenu.level === 2 && !cMenu.children) || cMenu.level === 3) {
      setNowActiveMainKey(fKey);
      setNowActiveKey(cMenu.key as string);
    }
    if (cMenu.level === 2) {
      // 二级菜单扩展切换
      const refreshObject = { ...parentMenuHeightList };
      for (const key in refreshObject) {
        if (
          refreshObject[key].children &&
          refreshObject[key].children.findIndex(
            (item: MenuHeightProps) => item.key === cMenu.key,
          ) !== -1
        ) {
          // 找出是哪个一级菜单的children
          const childIndex = refreshObject[key].children.findIndex(
            (item: MenuHeightProps) => item.key === cMenu.key,
          );
          refreshObject[key].children[childIndex].height =
            refreshObject[key].children[childIndex].height ===
            `${menuItemHeight}px`
              ? `${(refreshObject[key].children[childIndex].childNum + 1) *
                  menuItemHeight}px`
              : `${menuItemHeight}px`;
          let parentHeight =
            (refreshObject[key].childNum - refreshObject[key].children.length) *
              menuItemHeight +
            menuItemHeight; // 改变子菜单高度后统计父菜单高度
          parentHeight += refreshObject[key].children.reduce(
            (pre: MenuHeightProps, next: MenuHeightProps) => {
              return (
                Number(pre.height.split('px')[0]) +
                Number(next.height.split('px')[0])
              );
            },
          );
          refreshObject[key].height = parentHeight;
        }
      }
      setParentMenuHeightList(refreshObject);
    }
    if (cMenu.level === 3) {
      for (const key in parentMenuHeightList) {
        if (
          parentMenuHeightList[key].children &&
          parentMenuHeightList[key].children.findIndex(
            (item: MenuHeightProps) => item.key === fKey,
          ) !== -1
        ) {
          setNowActiveMainKey(parentMenuHeightList[key].key);
        }
      }
    }
  };

  const firstMenuHeight = (key: number) => {
    // 第一级菜单高度
    if (parentMenuHeightList[key]) {
      return {
        height: parentMenuHeightList[key]?.height,
      };
    }
    return {
      height: `${menuItemHeight}px`,
    };
  };

  const childMenuHeight = useCallback(
    (key: number) => {
      // 第二级菜单高度
      for (const i in parentMenuHeightList) {
        const childIndex = parentMenuHeightList[i].children?.findIndex(
          (item: RenderOptions) => item.key === key,
        );
        if (childIndex !== -1) {
          return {
            height: parentMenuHeightList[i].children[childIndex].height,
          };
        }
      }
      return {
        height: `${menuItemHeight}px`,
      };
    },
    [parentMenuHeightList],
  );

  const renderChildOptions = (childM: RenderOptions): JSX.Element | any => {
    // 传入level为1的children，进行子项递归
    if (childM.children) {
      return childM.children.map(m => {
        return (
          <div key={m.key}>
            <div
              className={
                nowActiveKey === m.key
                  ? `menu-activeMenuOptions active`
                  : `menu-childMenuOptions`
              }
              style={{
                ...childMenuHeight(m.key),
                textIndent: `${m?.level * 18}px`,
              }}
            >
              <div
                className={
                  m.children &&
                  m.children.findIndex(
                    (i: RenderOptions) => i.key === nowActiveKey,
                  ) !== -1
                    ? `menu-activeFatherTitle`
                    : `menu-fatherTitle`
                }
                onClick={e => toggleChildMenu(m, e, childM.key as string)}
              >
                <span className="menu-label">{m.label}</span>
                {m.children && (
                  <span className="menu-icon">
                    {childMenuHeight(m.key).height === `${menuItemHeight}px` ? (
                      <CaretDownOutlined />
                    ) : (
                      <CaretUpOutlined />
                    )}
                  </span>
                )}
              </div>
              <div
                style={{ textIndent: `${m?.level * 18}px` }}
                className={`menu-childMenuOptions`}
                key={m.key}
              >
                {m.children && renderChildOptions(m)}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div
      className={classNames}
      style={
        {
          width,
          ...style,
        } as any
      }
    >
      {items?.map((m: any) => {
        return (
          <div key={m.key}>
            <div className={`menu-options`} style={firstMenuHeight(m.key)}>
              <div
                className={
                  nowActiveMainKey === m.key
                    ? `menu-activeFatherTitle`
                    : `menu-fatherTitle`
                }
                onClick={e => toggleFirstMenu(m, e)}
              >
                <div className="left">
                  <i>{m.icon}</i>
                  <span className="menu-label">{m.label}</span>
                </div>
                <span className="menu-icon">
                  {firstMenuHeight(m.key).height === `${menuItemHeight}px` ? (
                    <CaretDownOutlined />
                  ) : (
                    <CaretUpOutlined />
                  )}
                </span>
              </div>
              <>{m.children && renderChildOptions(m)}</>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Menu);
