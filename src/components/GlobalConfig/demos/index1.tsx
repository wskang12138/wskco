import React, { useState } from 'react';
import { GlobalConfig, Button } from 'wskco';

export default function index1() {
  const [globalColor, setGlobalColor] = useState<Array<string>>([
    '#325DFF',
    'orange',
    'green',
  ]);

  const toggle = () => {
    setGlobalColor(oldColor => {
      oldColor.push(oldColor.shift() as string);
      return [...oldColor];
    });
  };

  return (
    <GlobalConfig globalColor={globalColor[0]}>
      <div style={{ position: 'relative' }}>
        <Button type="primary" onClick={toggle}>
          Toggle Config Color
        </Button>
        <p />
      </div>
    </GlobalConfig>
  );
}
