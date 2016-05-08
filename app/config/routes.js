import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { AppContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
    </Route>
  </Router>
);

export default routes
