import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import { FPSProps } from './interface'
const FPS: React.FC<FPSProps> = ({
  render = true,
  className,
  onChange = (fps: number) => {},
}) => {
  // 初始化表示
  const isInit = useRef(true);
  // 记录前一个时间
  const prev = useRef(performance.now());
  // 记录单位时间（1s）内的帧数
  const frames = useRef(0);
  // 帧率
  const [fps, setFps] = useState(0);
  // 记录前一个 rAF_id
  const rAFId = useRef(0);

  // 释放 rAF
  const removeRAF = () => {
    // 卸载 calculate
    if (rAFId.current !== 0) {
      cancelAnimationFrame(rAFId.current);
      rAFId.current = 0;
    }
  };

  // 计算帧率
  const calculate = () => {
    // 循环调用
    rAFId.current = requestAnimationFrame(calculate);

    // rAF 会在每一帧内调用，计算帧数
    frames.current += 1;

    // 计算时间差：小于 1s 取消
    const now = performance.now();
    const diff = now - prev.current;
    if (diff < 1000) return;

    // 否则计算帧率，并进入下一个循环
    prev.current = now;
    // 计算帧率
    const _fps = (frames.current * 1000) / diff;
    setFps(_fps);
    // 重置帧数
    frames.current = 0;
  };

  // 检测 fps 变动
  useEffect(() => {
    // 初始化执行 calculate
    if (rAFId.current === 0) {
      rAFId.current = requestAnimationFrame(calculate);
    }

    if (isInit.current) {
      isInit.current = false;
      return;
    }

    onChange(fps.toFixed(2));
  }, [fps]);

  // 卸载组件
  useEffect(() => {
    return () => {
      removeRAF();
      frames.current = 0;
    };
  }, []);

  if (render) {
    return (
      <div className={classnames('wskco-fps', className)}>
        {fps.toFixed(2)}
      </div>
    );
  }

  return null;
};

export default FPS;
