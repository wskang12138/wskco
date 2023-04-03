
import React from 'react';
import { Button, Message } from 'wskco';

const Index5 = () => {
  const message = (val: string) => {
    Message.info({
      content: val,
      duration: 5000,
      clearable: true,
    });
  };

  return (
    <>
      <Button type="primary" style={{ marginRight: '20px' }}>
        Update message
      </Button>
    </>
  );
};
export default Index5;
