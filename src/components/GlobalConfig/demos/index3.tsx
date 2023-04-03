import React, { useState } from 'react';
import { GlobalConfig, Button } from 'wskco';

export default function index1() {
  const [dark, setDark] = useState(
    document.documentElement.getAttribute('data-prefers-color'),
  );

  const toggle = () => {
    document.documentElement.setAttribute(
      'data-prefers-color',
      dark === 'light' ? 'dark' : 'light',
    );
    setDark(dark === 'light' ? 'dark' : 'light');
  };

  return (
    <GlobalConfig>
      <Button type="primary" onClick={toggle}>
        切换到 {dark} 主题
      </Button>
    </GlobalConfig>
  );
}
