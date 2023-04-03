/**
 * title: 基本使用
 */

import { RightMenu } from 'wskco';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <RightMenu
        seeState={true}
        menuItems={[
          {
            key: 'label1',
            label: 'label1',
            onClick: () => alert('label1'),
          },
          {
            key: 'label2',
            label: 'label2',
            onClick: () => alert('label2'),
          },
        ]}
      >
        <div style={{ height: 200, backgroundColor: '#004c5c', color: '#fff' }}>
          在此区域右键
        </div>
      </RightMenu>
    </div>
  );
};

export default App;
