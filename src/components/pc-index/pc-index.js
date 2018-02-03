import React, { Component } from 'react';
import PCHeader from '@/components/pc-header/pc-header';
import PCFooter from '@/components/pc-footer/pc-footer';

export default class PCIndex extends Component {
  render() {
    return (
      <div>
        <PCHeader></PCHeader>
        <PCFooter></PCFooter>
      </div>
    );
  }
}