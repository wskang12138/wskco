import React from 'react';
import { Skeleton } from 'wskco';

const Index4 = () => {
  return (
    <div style={{ width: '700px' }}>
      <Skeleton
        loading
        title
        avatar
        row={4}
        width={['50%', '60%', '70%', '80%']}
      />
    </div>
  );
};
export default Index4;
