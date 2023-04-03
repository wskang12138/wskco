import React, { useState } from 'react';
import { Space, Button } from 'wskco';

export default function index1() {
  const [size, setSize] = useState(8);

  return (
    <>
      <input
        style={{ width: '100%' }}
        type="range"
        value={size}
        onChange={e => {
          const value = e?.target?.value ?? '';
          setSize(value);
        }}
      />
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
}
