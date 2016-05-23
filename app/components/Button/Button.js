import React, { PropTypes, Component } from 'react'
import { ink, animate, outerContainer } from './styles.css'
import { Link } from 'react-router'
import classnames from 'classnames'
import Ripple from './Ripple.js'

const scale = {
  boxShadow: 'rgba(0, 0, 0, 0.24) 0 4px 8px 0'
}

class Button extends Component {
  constructor () {
    super()
    this.state = {
      cursorPos: {},
      scale: false
    }
  }
  removeScale () {
    this.setState({
      scale: false
    })
  }
  handleClick(e){
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    }
    this.setState({
      cursorPos: cursorPos,
      scale: true
    })
  }
  render () {
    return (
      <div className={outerContainer}>
        <a href={this.props.to} target={this.props.target}>
          <div className={this.props.containerClass} onMouseDown={(e) => {this.handleClick(e)}} onMouseUp={() => {this.removeScale()}}>
            <Ripple removeScale={() => {this.removeScale()}} cursorPos={ this.state.cursorPos } containerClass={this.props.containerClass}></Ripple>
            <span className={this.props.class} style={this.state.scale === false ? {} : scale}>{this.props.content}</span>
          </div>
        </a>
      </div>
    )
  }
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired
}

export default Button
