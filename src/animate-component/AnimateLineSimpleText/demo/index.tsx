import React from 'react';
import { AnimateLineSimpleText } from 'wskco';
import './index.css';

export default () => (
  <AnimateLineSimpleText
    text="wskco"
    style={{ width: 600, height: 180 }}
    textStyle={{ fontSize: 120, fontWeight: 700, letterSpacing: '8px' }}
    className="wskco-animate-line-simple-text__demo"
  />
);
