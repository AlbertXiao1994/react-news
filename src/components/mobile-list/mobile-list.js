import React, { Component } from 'react';
import { Row, Col } from 'antd'

export default class MobileList extends Component {
  state = {
    news: ''
  };
  componentWillMount() {
    const fetchOptions = {
      methods: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
    + this.props.type + '&count=' + this.props.count, fetchOptions)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        news: res
      });
    });
  };
  render() {
    const news = this.state.news;
    const newsList = news.length 
    ? news.map((item, index) => (
      <section key={index} className="m_article list-item special_section clearfix">
          <a href={`details/${item.uniquekey}`}>
            <div className="m_article_img">
              <img src={item.thumbnail_pic_s} alt={item.title} />
            </div>
            <div className="m_article_info">
              <div className="m_article_title">
                <span>{item.title}</span>
              </div>
              <div className="m_article_desc clearfix">
                <div className="m_article_desc_l">
                  <span className="m_article_channel">{item.realtype}</span>
                  <span className="m_article_time">{item.date}</span>
                </div>
              </div>
            </div>
          </a>
      </section>
    ))
    : '暂无新闻';
    return (
      <div>
        <Row>
          <Col span={24}>{ newsList }</Col>
        </Row>
      </div>
    );
  }
}