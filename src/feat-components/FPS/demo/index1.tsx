import React, { useRef, useState } from 'react';
import { FPS,Button } from 'wskco';

export default () => {
  const prev = useRef(0);
  const [isRun, setIsRun] = useState(false);

  const syncTask = () => {
    if (!isRun) {
      setIsRun(true);

      // 放到下一轮时间循环执行，否则线程会被同步占用导致按钮状态不更新
      setTimeout(() => {
        prev.current = performance.now();
        while (performance.now() - prev.current < 500) {}
        setIsRun(false);
      }, 20);
    }
  };

  return (
    <>
      <FPS />
      <br />
      <Button style={{ marginTop: '20px' }} disabled={isRun} onClick={syncTask}>
        {isRun ? '执行中...' : '执行一个0.5秒的同步任务'}
      </Button>
    </>
  );
};
