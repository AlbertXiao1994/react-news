import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
import crs_1 from 'common/images/carousel_1.jpg';
import crs_2 from 'common/images/carousel_2.jpg';
import crs_3 from 'common/images/carousel_3.jpg';
import crs_4 from 'common/images/carousel_4.png';
import PCNewsImageBlock from 'components/pc-news-image-block/pc-news-image-block';
import PCNewsBlock from 'components/pc-news-block/pc-news-block';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends Component {
  state = {
    key: '1'
  }
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      speed: 500
    };
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src={crs_1} alt="图片加载失败" /></div>
                  <div><img src={crs_2} alt="图片加载失败" /></div>
                  <div><img src={crs_3} alt="图片加载失败" /></div>
                  <div><img src={crs_4} alt="图片加载失败" /></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
            </div>
            <Tabs className="tabs_news">
              <TabPane key="1" tab="头条新闻">
                <PCNewsBlock count={22} type="top" width="100%" />
              </TabPane>
              <TabPane key="2" tab="娱乐">
                <PCNewsBlock count={22} type="yule" width="100%" />
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="130px" />
              <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}