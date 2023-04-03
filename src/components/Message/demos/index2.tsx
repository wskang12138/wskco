
import React from 'react';
import { Button, Message } from 'wskco';

const Index2 = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button type="primary" style={{ marginRight: '20px' }}>
        Info
      </Button>
      <Button type="danger" style={{ marginRight: '20px' }}>
        Error
      </Button>
      <Button type="warning" style={{ marginRight: '20px' }}>
        Warning
      </Button>
      <Button style={{ background: '#19b42a', marginRight: '20px' }}>
        Success
      </Button>
      <Button
        style={{ background: '#f2f3f5', color: '#000000', marginRight: '20px' }}
      >
        Normal
      </Button>
      <Button type="warning" style={{ marginRight: '20px' }}>
        Loading
      </Button>
    </div>
  );
};
export default Index2;
