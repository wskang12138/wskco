import React from 'react';
import { Select } from 'wskco';
/**
 * transform: true
 */
export default function SelectDemo1() {
  const option = [
    {
      label: 'Mucy',
      value: 'mucy',
    },
    {
      label: 'Mike',
      value: 'mike',
    },
    {
      label: 'aMck',
      value: 'amck',
    },
  ];
  const handleSelectCallback = (v: number) => {
    console.log(v);
  };
  return (
    <Select
      option={option}
      width={200}
      handleSelectCallback={handleSelectCallback}
      placeholder="请选择"
    />
  );
}
