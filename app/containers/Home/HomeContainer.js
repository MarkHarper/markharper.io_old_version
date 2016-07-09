import React, { Component } from 'react'
import { Home } from 'components'
import { home } from 'sharedStyles/styles.css'
import { background } from './background.js'

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundSetup: false
    }
  }

  componentDidMount () {
    let canvas = document.getElementById('background');
    background(this.props.width, this.props.height, canvas);
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
