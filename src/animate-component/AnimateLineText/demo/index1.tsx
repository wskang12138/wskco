import React from 'react';
import { AnimateLineText } from 'wskco';

export default () => (
  <AnimateLineText
    width="300"
    height="150"
    viewBox="0 0 300 150"
    strokeWidth="2px"
    content={[{ value: 'wskco', x: '50%', y: '75%', style: { fontSize: 80 } }]}
  />
);
