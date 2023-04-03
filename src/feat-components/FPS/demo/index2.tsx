import React, { useState } from 'react';
import { FPS } from 'wskco';

export default () => {
  const [fps, setFps] = useState(0);

  return (
    <>
      <FPS
        render={false}
        onChange={(_fps: number) => {
          setFps(_fps);
        }}
      ></FPS>
      FPS: {fps}
    </>
  );
};
