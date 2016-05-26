import React, { Component } from 'react'
import { Home } from 'components'
import { home } from 'sharedStyles/styles.css'
import BackgroundHome from './BackgroundHome.js'
import p5 from 'p5'


class HomeContainer extends Component {
  componentDidMount () {
    new p5(BackgroundHome(this.props.width, this.props.height), home);
  }

  render () {
    return (
      <Home width={this.props.width}
        height={this.props.height}
        children={this.props.children}
        location={this.props.location}/>
    )
  }
}

export default HomeContainer
