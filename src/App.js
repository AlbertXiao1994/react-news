import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PCIndex from 'components/pc-index/pc-index'
import MobileIndex from 'components/mobile-index/mobile-index'

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <PCIndex />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
          <MobileIndex />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
