import React, { Component } from 'react';
import { Icon, Button, Modal, Form, Tabs, Input } from 'antd';
const TabPane = Tabs.TabPane;
const logoSrc = require('common/images/logo.png');

class MobileHeader extends Component {
  state = {
		current: 'top',
		hasLogined: false,
		userName: '',
		userId: 0,
		modalVisible: false,
		action: 'login',
		buttonSize: 'small',
		mode: 'top'
  };
  componentWillMount() {
		if (localStorage.userId !== '') {
			this.setState({
				hasLogined: true,
				userId: localStorage.userId,
				userName: localStorage.userName
			});
		}
	}
  handleClick = (e) => {
    if (e.key === "register") {
      this.setState({
        modalVisible: true
      })
    }
   	this.setState({
		  current: e.key
    });
	};
	logout = () => {
		localStorage.userId= '';
		localStorage.userName = '';
		this.setState({hasLogined:false});
	};
	setModalVisible = () => {
		this.setState({
			modalVisible: !this.state.modalVisible
		});
	};
	onTabsChange = (key) => {
		if (key === '1') {
			this.setState({
				action: 'login'
			});
		} else if (key === '2') {
			this.setState({
				action: 'register'
			});
		}
	};
	submitForm = (e) => {
		e.preventDefault();
		const fetchOptions = {
			method: 'GET'
		};
		let formData = this.props.form.getFieldsValue();
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=' + this.state.action
		+ '&username=' + formData.userName + '&password=' + formData.password
		+ '&r_userName=' + formData.r_userName + '&r_password=' + formData.r_password
		+ '&r_confirmPassword=' + formData.r_confirmPassword, fetchOptions)
		.then(res => res.json())
		.then((res) => {
			this.setState({
				userName: res.NickUserName,
				userId: res.UserId
			});
			localStorage.userName = res.NickUserName;
			localStorage.userId = res.UserId;
		});
		if (this.state.action === 'login') {
			this.setState({
				hasLogined: true
			})
		}
		this.setModalVisible();
  };
  render() {
    let { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined
    ? <Icon type="inbox" />
    : <Icon type="setting" onClick={this.setModalVisible} />;
    return (
      <div id="mobileheader">
        <header>
          <img src={logoSrc} alt="logo" />
          <span>ReactNews</span>
          {userShow}
        </header>  
				<Modal
					title="用户中心" 
					wrapClassName="vertical-center-modal" 
					visible={this.state.modalVisible} 
					onCancel={this.setModalVisible}
					onOk={this.setModalVisible}
					okText="关闭"
          cancelText="取消"
				>
					<Tabs type="card" onChange={this.onTabsChange}>
							<TabPane tab="登录" key="1">
								<Form onSubmit={this.submitForm}>
									<Form.Item label="用户名">
										{getFieldDecorator('userName', {
											rules: [{ required: true, message: '请输入您的用户名'}],
										})(
											<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="请输入您的用户名" />
										)}
									</Form.Item>
									<Form.Item label="密码">
										{getFieldDecorator('password', {
											rules: [{ required: true, message: '请输入您的密码'}],
										})(
											<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="请输入您的密码" />
										)}
									</Form.Item>
									<Button type="primary" htmlType="submit">登录</Button>
								</Form>
							</TabPane>
							<TabPane tab="注册" key="2">
                <Form onSubmit={this.submitForm}>
									<Form.Item label="用户名">
										{getFieldDecorator('r_userName', {
											rules: [{ required: true, message: '请输入您的用户名'}],
										})(
											<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="请输入您的用户名" />
										)}
									</Form.Item>
									<Form.Item label="密码">
										{getFieldDecorator('r_password', {
											rules: [{ required: true, message: '请输入您的密码'}],
										})(
											<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="请输入您的密码" />
										)}
									</Form.Item>
                  <Form.Item label="确认密码">
										{getFieldDecorator('r_confirmPassword', {
											rules: [{ required: true, message: '请确认您的密码'}],
										})(
											<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="请确认您的密码" />
										)}
									</Form.Item>
									<Button type="primary" htmlType="submit">注册</Button>
								</Form>
							</TabPane>
					</Tabs>
				</Modal>
				<Tabs
          defaultActiveKey="1"
          tabPosition={this.state.mode}
        >
          <TabPane tab="头条" key="1">Content of tab 1</TabPane>
          <TabPane tab="社会" key="2">Content of tab 2</TabPane>
          <TabPane tab="国内" key="3">Content of tab 3</TabPane>
          <TabPane tab="国际" key="4">Content of tab 4</TabPane>
          <TabPane tab="娱乐" key="5">Content of tab 5</TabPane>
          <TabPane tab="体育" key="6">Content of tab 6</TabPane>
          <TabPane tab="科技" key="7">Content of tab 7</TabPane>
          <TabPane tab="时尚" key="8">Content of tab 8</TabPane>
        </Tabs>
			</div>
    );
  }
}

export default MobileHeader = Form.create()(MobileHeader);