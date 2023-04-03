import React, { useState } from 'react';
import { Space, Button } from 'wskco';

export default function index1() {
  const [size, setSize] = useState<'mini' | 'small' | 'medium' | 'large'>(
    'small',
  );

  return (
    <>
      <Space align="end">
        <Button size="small" type="info" onClick={() => setSize('small')}>
          small
        </Button>
        <Button type="info" onClick={() => setSize('medium')}>
          medium
        </Button>
        <Button size="large" type="info" onClick={() => setSize('large')}>
          large
        </Button>
      </Space>
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
