import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import LandingPage from './components/pages/LandingPage.js';
import NotFound from './components/pages/NotFound.js';

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path='/' component={LandingPage} />

        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

export default AppRouter;
