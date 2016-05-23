import React, { Component } from 'react'
import { Home } from 'components'
import { home } from 'sharedStyles/styles.css'
import backgroundHome from './background.js'

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    this.handleResize = this.handleResize.bind(this);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
    var sketch
    if (!sketch) {
      var background = backgroundHome(this.state.width, this.state.height - 81);
      var canvas = document.getElementById('background');
      var p = new Processing( canvas, background );
    }
  }

  handleResize (e) {
    this.setState({ width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render () {
    return (
      <Home width={this.state.width} height={this.state.height - 81} children={this.props.children} location={this.props.location}/>
    )
  }
}

export default HomeContainer
