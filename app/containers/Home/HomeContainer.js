import React, { Component } from 'react'
import { Home } from 'components'
import { home } from 'sharedStyles/styles.css'
import { resize, setup } from './background.js'

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundSetup: false
    }
  }

  componentDidMount () {
    if (this.state.backgroundSetup === true) {
      resize(this.props.width, this.props.height);
    } else {
      setup(this.props.width, this.props.height);
      this.setState({
        backgroundSetup: true
      });
    }
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
