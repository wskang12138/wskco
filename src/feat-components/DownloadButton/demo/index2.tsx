import { Message, Space } from 'wskco';
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

const demo1 = () => {
  return (
    <Space>
      {/* 基本使用：下载字符 */}
      <DownloadButton
        buttonText="下载txt文件1"
        type="primary"
        downloadType="txt"
        content={str}
        fileName={`test_txt_${new Date().toLocaleString()}`}
      />
      {/* 请求获取字符并下载 */}
      <DownloadButton
        buttonText="下载txt文件2"
        type="primary"
        downloadType="txt"
        url={'http://172.22.19.45:11520/api/v1/test/file/O00003.TXT'}
        fileName={`test_xlsx_${new Date().toLocaleString()}`}
      />
      {/* 先处理数据再下载 */}
      <DownloadButton
        buttonText="下载txt文件3"
        type="primary"
        downloadType="txt"
        content={str}
        fileName={`test_xlsx_${new Date().toLocaleString()}`}
        contentCallback={async (v: any) => {
          return v?.slice(0, 8);
        }}
        downloadedCallback={async (bool: boolean) => {
          if (bool) {
            Message.success('下载成功');
          } else {
            Message.error('下载失败');
          }
        }}
      />
    </Space>
  );
};

export default demo1;
