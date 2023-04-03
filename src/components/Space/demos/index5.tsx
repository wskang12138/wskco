import React from 'react';
import { Space, Button } from 'wskco';

export default function index1() {
  return (
    <Space size={[12, 18]} wrap>
      {new Array(30).fill('')?.map((item, index) => {
        return (
          <Button key={index} type="primary">
            按钮{index + 1}
          </Button>
        );
      })}
    </Space>
  );
}
