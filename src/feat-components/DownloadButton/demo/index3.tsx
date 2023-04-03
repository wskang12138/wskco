import { Space } from 'wskco';
import { DownloadButton } from 'wskco';
import React from 'react';

const json = {
  name: '萝莉',
  age: 22,
  address: '广州市',
};

const demo1 = () => {
  return (
    <Space>
      {/* 基本使用 */}
      <DownloadButton
        buttonText="下载json文件1"
        type="primary"
        downloadType="json"
        content={json}
        fileName={`test_json_${new Date().toLocaleString()}`}
      />
      {/* 下载请求获取的json */}
      <DownloadButton
        buttonText="下载json文件2"
        type="primary"
        downloadType="json"
        url={'https://api.github.com/emojis'}
        fileName={`test_json_${new Date().toLocaleString()}`}
      />
      {/* 处理请求到json并下载 */}
      <DownloadButton
        buttonText="下载json文件3"
        type="primary"
        downloadType="json"
        url={'https://api.github.com/emojis'}
        fileName={`test_json_${new Date().toLocaleString()}`}
        contentCallback={async (res: any) => {
          return await res.json();
        }}
      />
    </Space>
  );
};

export default demo1;
