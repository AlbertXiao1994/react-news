import React, { Component } from 'react';
import MediaQuery from "react-responsive"

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
