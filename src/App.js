import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PCIndex from 'components/pc-index/pc-index'

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <PCIndex />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
