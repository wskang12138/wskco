import React from 'react';
import { Switch } from 'wskco';


export default function index1() {
  return (
    <div>
      <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
      <Switch
        style={{ marginLeft: '10px' }}
        defaultChecked
      />
    </div>
  );
}
