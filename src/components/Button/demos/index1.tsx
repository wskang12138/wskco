import React from 'react';
import { Button, Space } from 'wskco';

const index1 = () => {
  return (
    <Space>
      <Button type="default">默认按钮</Button>
      <Button type="primary">基础按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="link">链接按钮</Button>
      <Button type="dashed">虚线按钮</Button>
    </Space>
  );
};

export default index1;
