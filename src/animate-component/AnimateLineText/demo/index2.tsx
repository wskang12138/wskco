import React from 'react';
import { AnimateLineText } from 'wskco';

export default () => (
  <div style={{ background: '#000' }}>
    <AnimateLineText
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      content={[
        { value: 'wskco', x: '50%', y: '45%', style: { fontSize: 200 } },
        { value: 'text', x: '50%', y: '78%', style: { fontSize: 100 } }
      ]}
    />
  </div>
);
