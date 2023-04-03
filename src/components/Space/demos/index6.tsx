import React, { useState } from 'react';
import { Space, Button } from 'wskco';

const index = () => {
  const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    blockStyle = {
      flex: 'none',
      margin: '8px 4px',
      padding: '4px',
      border: '1px solid #40a9ff',
    },
    mockBlockStyle = {
      display: 'inline-block',
      padding: '32px 8px 16px',
      background: 'rgba(150, 150, 150, 0.2)',
    };

  return (
    <div style={containerStyle}>
      <div style={blockStyle}>
        <Space align="center">
          center
          <Button type="primary">Primary</Button>
          <span style={mockBlockStyle}>Block</span>
        </Space>
      </div>
      <div style={blockStyle}>
        <Space align="start">
          start
          <Button type="primary">Primary</Button>
          <span style={mockBlockStyle}>Block</span>
        </Space>
      </div>
      <div style={blockStyle}>
        <Space align="end">
          end
          <Button type="primary">Primary</Button>
          <span style={mockBlockStyle}>Block</span>
        </Space>
      </div>
      <div style={blockStyle}>
        <Space align="baseline">
          baseline
          <Button type="primary">Primary</Button>
          <span style={mockBlockStyle}>Block</span>
        </Space>
      </div>
    </div>
  );
};

export default index;
