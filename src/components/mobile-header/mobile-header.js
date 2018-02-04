import React, { Component } from 'react';
const logoSrc = require('common/images/logo.png');

export default class MobileHeader extends Component {
  render() {
    return (
      <div id="mobileheader">
        <header>
          <img src={logoSrc} alt="logo" />
          <span>ReactNews</span>
        </header>
      </div>
    );
  }
}