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
  } else if (props.location.pathname === '/contact') {
    return pageSliderB;
  }
}

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight - 82,
      animationType: pageSliderA
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize (e) {
    this.setState({
      width: window.outerWidth,
      height: window.innerHeight - 82
    });
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      animationType: switchAnimation(this.props, nextProps.location.pathname)
    })
  }

  render () {
    return (
      <App animationType={this.state.animationType}
        children={this.props.children}
        location={this.props.location}
        height={this.state.height}
        width={this.state.width}/>
    )
  }
}

export default AppContainer
