import React, { Component } from 'react';
import PCHeader from 'components/pc-header/pc-header';
import PCFooter from 'components/pc-footer/pc-footer';
import PCNewsContainer from 'components/pc-news-container/pc-news-container'

export default class PCIndex extends Component {
  render() {
    return (
      <div>
        <PCHeader></PCHeader>
        <PCNewsContainer></PCNewsContainer>
        <PCFooter></PCFooter>
      </div>
    );
  }
}