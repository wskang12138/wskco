import React from 'react';
import { DragList } from 'wskco';

export default () => {
  const els = new Array(10).fill(0).map((_, i) => (
    <div
      key={i}
      style={{
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '6px 0',
        background: '#dbdbdb',
      }}
    >
      {i + 1}
    </div>
  ));

  return (
    <DragList
      onChange={(newVal: any, from: any, to: any) => {
        console.log('onChange: ', newVal, from, to);
      }}
    >
      {els}
    </DragList>
  );
};
