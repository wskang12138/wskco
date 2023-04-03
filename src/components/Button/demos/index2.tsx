import React from 'react';
import { Button, Space } from 'wskco';

const index2 = () => {
  return (
    <Space>
      <Button size="large" type="primary">
        大尺寸按钮
      </Button>
      <Button type="primary">中尺寸按钮</Button>
      <Button size="small" type="primary">
        小尺寸按钮
      </Button>
    </Space>
  );
};

export default index2;
