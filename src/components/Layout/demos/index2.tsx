import React from 'react';
import { Layout, Header, Content, Footer, Slider } from 'wskco';

export default function LayoutDemo1() {
  return (
    <Layout>
      <Header style={{ background: '#9ae7d9' }}>header</Header>
      <Layout>
        <Slider style={{ fontSize: '12px', background: '#46af9c' }}>
          slider
        </Slider>
        <Content style={{ fontSize: '50px', background: '#ccf5ed' }}>
          content
        </Content>
      </Layout>
      <Footer style={{ background: '#9ae7d9' }}>footer</Footer>
    </Layout>
  );
}
