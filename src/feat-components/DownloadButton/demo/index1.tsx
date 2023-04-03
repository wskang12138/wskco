import { Space } from 'wskco';
import { DownloadButton } from 'wskco';
import React from 'react';

// 换行符处换行
const str = `test txt1
test txttest txttest txt2
test txttest txttest txttest txt3
test txttest txttest txt4
test txttest txttest txt5
test txttest txttest txt6
test txttest txttest txt7
`;

const list = [
  ['序号', '英文名', '中文名'],
  ['1', 'Good Morning', '早上好'],
  ['2', 'Good Morning', '早上好'],
  ['3', 'Good Morning', '早上好'],
  ['4', 'Good Morning', '早上好'],
  ['5', 'Good Morning', '早上好'],
];

const demo1 = () => {
  return (
    <Space>
      {/* 基本使用：下载字符串 */}
      <DownloadButton
        buttonText="下载xlsx文件1"
        type="primary"
        downloadType="xlsx"
        content={str}
        fileName={`test_xlsx_${new Date().toLocaleString()}`}
      />
      {/* 下载数组 */}
      <DownloadButton
        buttonText="下载xlsx文件2"
        type="primary"
        downloadType="xlsx"
        content={list}
        fileName={`test_xlsx_${new Date().toLocaleString()}`}
      />
    </Space>
  );
};

export default demo1;
