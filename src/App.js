import React, { Component } from 'react';
import MediaQuery from "react-responsive";
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <Button type="primary">Button</Button>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
