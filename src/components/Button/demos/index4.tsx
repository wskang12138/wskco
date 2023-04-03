import React from 'react';
import { Button, Space } from 'wskco';

const index4 = () => {
  return (
    <Space>
      <Button type="default" disabled>
        默认按钮
      </Button>
      <Button type="primary" disabled>
        基础按钮
      </Button>
      <Button type="danger" disabled>
        危险按钮
      </Button>
      <Button type="warning" disabled>
        警告按钮
      </Button>
      <Button type="info" disabled>
        信息按钮
      </Button>
      <Button type="link" disabled>
        链接按钮
      </Button>
      <Button type="dashed" disabled>
        虚线按钮
      </Button>
    </Space>
  );
};

export default index4;
