import React, { Component } from 'react';
import MobileHeader from 'components/mobile-header/mobile-header';
import MobileFooter from 'components/mobile-footer/mobile-footer';

export default class MobileIndex extends Component {
  render() {
    return (
      <div>
        <MobileHeader></MobileHeader>
        <MobileFooter></MobileFooter>
      </div>
    );
  }
}