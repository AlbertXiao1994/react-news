import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Button, Modal, Form, Tabs, Input } from 'antd';
// import { Link } from 'react-router-dom';
const logoSrc = require('common/images/logo.png');
const TabPane = Tabs.TabPane;

class PCHeader extends Component {
  state = {
		current: 'top',
		hasLogined: false,
		userName: '',
		userId: 0,
		modalVisible: false,
		action: 'login',
		buttonSize: 'small'
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
		const { getFieldDecorator } = this.props.form;
		const userShow = this.state.hasLogined
			? <Menu.Item key="logout" className="register">
				 <Button type="primary" htmlType="button" size={this.state.buttonSize}>{this.state.userName}</Button>
				 &nbsp;&nbsp;
				 <Button type="ghost" htmlType="button" onClick={this.logout} size={this.state.buttonSize}>退出</Button>
			 	</Menu.Item>
			: <Menu.Item key="register" className="register">
					<Icon type="appstore" />登录/注册
				</Menu.Item>;
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
						<a href="/" className="logo">
							<img src={logoSrc} alt="logo"/>
							<span>ReactNews</span>
						</a>
					</Col>
          <Col span={16}>
          	<Menu mode="horizontal"
                selectedKeys={[this.state.current]}
                onClick={this.handleClick}>
							<Menu.Item key="top">
								<Icon type="appstore"/>头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<Icon type="appstore"/>社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore"/>国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore"/>国际
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore"/>娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Icon type="appstore"/>体育
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore"/>科技
							</Menu.Item>
							<Menu.Item key="shishang">
								<Icon type="appstore"/>时尚
							</Menu.Item>
							{userShow}
						</Menu>
						<Modal
						title="用户中心" 
						wrapClassName="vertical-center-modal" 
						visible={this.state.modalVisible} 
						onCancel={this.setModalVisible}
						onOk={this.setModalVisible}
						okText="关闭"
            cancelText="取消">
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
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}

export default PCHeader = Form.create()(PCHeader);