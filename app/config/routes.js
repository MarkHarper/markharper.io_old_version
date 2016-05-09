import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { AppContainer, HomeContainer, ContactContainer,
  SkillsContainer, ArticlesContainer, PortfolioContainer } from 'containers'
import {App} from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={HomeContainer}></IndexRoute>
      <Route path='contact' component={ContactContainer}></Route>
      <Route path='skills' component={SkillsContainer}></Route>
      <Route path='articles' component={ArticlesContainer}></Route>
      <Route path='portfolio' component={PortfolioContainer}></Route>
    </Route>
  </Router>
)

export default routes
