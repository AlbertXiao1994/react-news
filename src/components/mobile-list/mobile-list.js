import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Tloader from 'react-touch-loader';

export default class MobileList extends Component {
  state = {
    news: '',
    count: 5,
    initializing: 1,
    hasMore: false
  };
  componentWillMount() {
    const fetchOptions = {
      methods: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
    + this.props.type + '&count=' + this.state.count, fetchOptions)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        news: res
      });
    });
  };
  handleLoadMore(resolve) {
    setTimeout(() => {
      let count = this.state.count;
      this.setState({
        count: count + 5
      });
      const fetchOptions = {
        methods: 'GET'
      };
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
      + this.props.type + '&count=' + this.state.count, fetchOptions)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          news: res
        });
      });

      this.setState({
        hasMore: count > 0 && count <= 50
      });

      resolve();
    }, 2000);
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hasMore: true,
        initializing: 1
      })
    }, 2000)
    
  };
  render() {
    const { initializing, hasMore} = this.state;
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
          <Col span={24}>
            <Tloader
              initializing={initializing}
              hasMore={hasMore}
              onLoadMore={() => this.handleLoadMore}
              className="tloader">
              { newsList }
            </Tloader>
          </Col>
        </Row>
      </div>
    );
  }
}