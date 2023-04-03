import React from 'react';
import { List } from 'wskco';
import './_index.scss';


export default function listDemo1() {

  const dataSource = [
    'Beijing Bytedance Technology Co., Ltd.',
    'Bytedance Technology Co., Ltd.',
    'Beijing Toutiao Technology Co., Ltd.',
    'Beijing Volcengine Technology Co., Ltd.',
    'China Beijing Bytedance Technology Co., Ltd.',
  ];

  return (
    <List
      style={{ fontSize: '16px', width: '600px' }}
      header="List title"
      size="default"
      dataSource={dataSource}
      render={(item: string) => {
        return (
          <List.Item style={{ fontSize: '14px' }} key={item}>
            <div className="list">{item}</div>
          </List.Item>
        );
      }}
    />
  );
}
