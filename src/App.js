import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PCIndex from 'components/pc-index/pc-index';
import MobileIndex from 'components/mobile-index/mobile-index';
import PCNewsDetail from 'components/pc-news-detail/pc-news-detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <Router>
            <div>
              <Route exact path="/" component={PCIndex} />
              <Route path="/details/:uniquekey" component={PCNewsDetail} />
            </div>
          </Router>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1223}>
          <MobileIndex />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
