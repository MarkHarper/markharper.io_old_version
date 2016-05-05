import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { HomeContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HomeContainer}>
    </Route>
  </Router>
);

export default routes
