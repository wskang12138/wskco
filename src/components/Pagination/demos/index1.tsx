import React from 'react';
import { Pagination } from 'wskco';

export default function PatginationDemo1() {
  const changePageCallback = (pageNum: number) => {
    console.log(pageNum);
  };
  return <Pagination total={50} changePageCallback={changePageCallback} />;
}
