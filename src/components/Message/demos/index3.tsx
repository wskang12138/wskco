
import React from 'react';
import { Button, Message } from 'wskco';

const Index3 = () => {
  const message = (val: string) => {
    Message.loading({
      content: val,
      duration: 3000,
    });
    // 调用时请留给message结尾动画0.2s的空档时间
    setTimeout(() => {
      Message.success('Update Success');
    }, 3201);
  };

  return (
    <>
      <Button type="primary" style={{ marginRight: '20px' }}>
        Update message
      </Button>
    </>
  );
};
export default Index3;
