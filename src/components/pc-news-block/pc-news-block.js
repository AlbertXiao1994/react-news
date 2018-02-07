import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default class PCNewsBlock extends Component {
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
      <li key={index}>
       <Link to={`details/${item.uniquekey}`} target="_blank">{ item.title }</Link>
      </li>
    ))
    : '暂无新闻';
    return (
      <div className="topNewsList">
        <Card>
          <ul>
            { newsList }
          </ul>
        </Card>
      </div>
    );
  }
}