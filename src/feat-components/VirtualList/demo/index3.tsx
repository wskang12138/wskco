import React from 'react';
import { VariableSizeList } from 'wskco';
import { lorem } from 'faker';

interface props {
  index: number;
  style: object;
}

export default () => {
  const data = new Array(1000).fill(0).map((_, idx) => ({
    id: idx + 1,
    content: lorem.sentences()
  }));

  const Row = ({ index, style, ...rest }: props) => {
    return (
      <div
        style={{
          ...style,
          padding: '20px 10px',
          background: index % 2 === 1 ? 'rgb(248, 248, 240)' : '',
          boxSizing: 'border-box'
        }}
        {...rest}
      >
        {`${index}: ${data[index]?.content}`}
      </div>
    );
  };

  return (
    <>
      <VariableSizeList height={300} itemCount={1000}>
        {Row}
      </VariableSizeList>
    </>
  );
};
