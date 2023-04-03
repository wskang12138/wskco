import React from 'react';
import { Pagination } from 'wskco';

export default function PatginationDemo2() {
  const changePageCallback = (pageNum: number) => {
    console.log(pageNum);
  };
  return (
    <Pagination
      defaultIndex={3}
      total={200}
      changePageCallback={changePageCallback}
    />
  );
}
