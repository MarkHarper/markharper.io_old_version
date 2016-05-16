import React, { Component } from 'react'
import { App } from 'components'
import pageSliderA from './transitionA.css'
import pageSliderB from './transitionB.css'

let switchAnimation = function (props, path) {
  if (props.location.pathname === '/') {
    return pageSliderA;
  } else if (props.location.pathname === '/portfolio') {
    if (path === '/') {
      return pageSliderB;
    } else if (path === '/skills') {
      return pageSliderA;
    }
  } else if (props.location.pathname === '/skills') {
    return pageSliderB;
  }
}

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationType: pageSliderA
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      animationType: switchAnimation(this.props, nextProps.location.pathname)
    })
  }
  render () {
    return (
      <App animationType={this.state.animationType} children={this.props.children} location={this.props.location} height={window.innerHeight - 83}/>
    )
  }
}

export default AppContainer
