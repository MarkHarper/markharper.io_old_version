import React, { Component } from 'react'
import { Home } from 'components'
import BackgroundHome from './BackgroundHome.js'
import p5 from 'p5'

class HomeContainer extends Component {
  componentDidMount () {
    new p5(BackgroundHome(window.innerWidth, window.innerHeight - 81))
  }
  render () {
    return (
      <Home children={this.props.children} location={this.props.location}/>
    )
  }
}

export default HomeContainer
