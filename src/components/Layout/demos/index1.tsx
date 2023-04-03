import React from 'react';
import { Layout, Header, Content, Footer, Slider } from 'wskco';

export default function LayoutDemo1() {
  const headerStyle = {
    background: '#7DBCEA',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const contentStyle = {
    background: '#325DFF',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const sliderStyle = {
    background: '#3ba0e9',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <div>
        <Layout>
          <Header style={headerStyle}>header</Header>
          <Content style={contentStyle}>content</Content>
          <Footer style={headerStyle}>footer</Footer>
        </Layout>
      </div>
      <br />
      <div>
        <Layout>
          <Header style={headerStyle}>header</Header>
          <Layout>
            <Slider style={sliderStyle}>slider</Slider>
            <Content style={contentStyle}>content</Content>
          </Layout>
          <Footer style={headerStyle}>footer</Footer>
        </Layout>
      </div>
      <br />
      <div>
        <Layout>
          <Header style={headerStyle}>header</Header>
          <Layout>
            <Content style={contentStyle}>content</Content>
            <Slider style={sliderStyle}>slider</Slider>
          </Layout>
          <Footer style={headerStyle}>footer</Footer>
        </Layout>
      </div>
      <br />
      <div>
        <Layout>
          <Header style={headerStyle}>header</Header>
          <Layout>
            <Slider style={sliderStyle}>slider</Slider>
            <Content style={contentStyle}>content</Content>
            <Slider style={sliderStyle}>slider</Slider>
          </Layout>
          <Footer style={headerStyle}>footer</Footer>
        </Layout>
      </div>
    </>
  );
}
