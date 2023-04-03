import React from 'react';
import { Switch } from 'wskco';

export default function index1() {
  return (
    <div>
      <Switch disabled />
      <Switch style={{ marginLeft: '10px' }} defaultChecked disabled />
    </div>
  );
}
