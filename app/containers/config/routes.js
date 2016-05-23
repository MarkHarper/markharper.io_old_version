import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { AppContainer, HomeContainer, ContactContainer,
  SkillsContainer, ArticlesContainer, PortfolioContainer } from 'containers'
import {App} from 'components'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={HomeContainer}></IndexRoute>
      <Route path='skills' component={SkillsContainer}></Route>
      <Route path='portfolio' component={PortfolioContainer}></Route>
      <Route path='contact' component={ContactContainer}></Route>
    </Route>
  </Router>
)

export default routes
