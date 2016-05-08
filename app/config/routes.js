import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { HomeContainer, ContactContainer,
  SkillsContainer, ArticlesContainer, PortfolioContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HomeContainer}></Route>
    <Route path='/contact' component={ContactContainer}></Route>
    <Route path='/skills' component={SkillsContainer}></Route>
    <Route path='/articles' component={ArticlesContainer}></Route>
    <Route path='/portfolio' component={PortfolioContainer}></Route>
  </Router>
);

export default routes
