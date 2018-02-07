import React, { Component } from 'react';
import { Row, Col } from 'antd'
import { Tabs, Carousel } from 'antd'

export default class PCNewsContainer extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      speed: 500,
    };
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  
                </Carousel>
              </div>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}