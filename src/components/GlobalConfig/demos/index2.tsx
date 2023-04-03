import React, { useState } from 'react';
import { GlobalConfig, Button,Space } from 'wskco';

export default function index1() {
  const [globalColor, setGlobalColor] = useState('');

  return (
    <GlobalConfig globalColor={globalColor}>
      <div style={{ position: 'relative' }}>
        <Space>
          <span>开启自定义主题</span>
          <input
            type="color"
            width="50"
            onChange={e => {
              const color = e?.target?.value ?? '';
              setGlobalColor(color);
            }}
          />
        </Space>
        <Button>按钮</Button>
        <p />
      </div>
    </GlobalConfig>
  );
}
