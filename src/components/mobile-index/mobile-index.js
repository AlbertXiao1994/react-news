import React, { Component } from 'react';
import MobileHeader from 'components/mobile-header/mobile-header';
import MobileList from 'components/mobile-list/mobile-list';
import MobileFooter from 'components/mobile-footer/mobile-footer';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends Component {
  state = {
    mode: 'top'
  };
  render() {
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Tabs
          defaultActiveKey="1"
          tabPosition={this.state.mode}
        >
          <TabPane tab="头条" key="1">
            <MobileList count={20} type="top" />
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList count={20} type="shehui" />
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList count={20} type="guonei" />
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList count={20} type="guoji" />  
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList count={20} type="guoji" />
          </TabPane>
          <TabPane tab="体育" key="6">
            <MobileList count={20} type="tiyu" />
          </TabPane>
          <TabPane tab="科技" key="7">
            <MobileList count={20} type="keji" />
          </TabPane>
          <TabPane tab="时尚" key="8">
            <MobileList count={20} type="shishang" />
          </TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    );
  }
}