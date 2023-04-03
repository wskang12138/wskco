import React from 'react';
import { FixedSizeList } from 'wskco';

interface props {
  index: number;
  style: object;
}

export default () => {
  const data = new Array(1000).fill(0).map((_, idx) => `Row ${idx + 1}`);

  const Row = ({ index, style }: props) => {
    return (
      <div
        style={{
          ...style,
          background: index % 2 === 1 ? 'rgb(248, 248, 240)' : ''
        }}
      >
        {data[index]}
      </div>
    );
  };

  return (
    <>
      <FixedSizeList height={300} itemCount={1000} itemSize={36}>
        {Row}
      </FixedSizeList>
    </>
  );
};
