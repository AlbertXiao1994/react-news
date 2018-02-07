import React, { Component } from 'react';
import { Card } from 'antd';

export default class PCNewsImageBlock extends Component {
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
    const styleImg = {
      display: 'block',
      width: this.props.imageWidth,
      height: '90px'
    };
    const styleH3 = {
      width: this.props.imageWidth,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    };
    const news = this.state.news;
    const newsList = news.length 
    ? news.map((item, index) => (
      <div key={index} className="imageblock">
        <a href={`details/${item.uniquekey}`} target="_blank">
          <div className="custom-image">
            <img alt="加载失败" style={styleImg} src={item.thumbnail_pic_s} />
          </div>
          <div className="custom-card">
            <h3 style={styleH3}>{ item.title }</h3>
            <p style={styleH3}>{ item.author_name }</p>
          </div>
        </a>
      </div>
    ))
    : '暂无新闻';
    return (
      <div className="topNewsList">
        <Card title={this.props.cartTitle} style={{ width: this.props.width }}>
          { newsList }
        </Card>
      </div>
    );
  };
}