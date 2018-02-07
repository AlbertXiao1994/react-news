import React, { Component } from 'react';
import {Row, Col, BackTop} from 'antd';
import PCHeader from 'components/pc-header/pc-header';
import PCFooter from 'components/pc-footer/pc-footer';
import PCNewsImageBlock from 'components/pc-news-image-block/pc-news-image-block';

export default class PCNewsDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsItem: ''
		};
		this.createMarkup = this.createMarkup.bind(this);
	}
  componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		});
  };
  createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
  render() {
    return (
      <div>
				<PCHeader></PCHeader>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container">
						<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<hr/>
					</Col>
					<Col span={6}>
						<PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
					</Col>
					<Col span={2}></Col>
				</Row>
				<PCFooter></PCFooter>
				<BackTop/>
			</div>
    );
  }
}