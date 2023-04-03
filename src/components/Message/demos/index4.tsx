
import React from 'react';
import { Button, Message } from 'wskco';

const Index4 = () => {
  const message = (val: string, position: 'top' | 'bottom') => {
    Message.info({
      content: val,
      duration: 3000,
      position,
    });
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button style={{ marginRight: '20px' }} type="primary">
        top
      </Button>
      <Button type="primary">bottom</Button>
    </div>
  );
};
export default Index4;
