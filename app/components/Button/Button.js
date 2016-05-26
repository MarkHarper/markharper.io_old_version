import React, { PropTypes, Component } from 'react'
import { ink, animate, link, innerContainer, button } from './styles.css'
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
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.removeScale = this.removeScale.bind(this);
  }

  removeScale () {
    document.removeEventListener("mouseup", this.hide);
    this.setState({
      scale: false
    })
  }

  handleMouseDown(e){
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    }
    this.setState({
      cursorPos: cursorPos,
      scale: true
    })
    document.addEventListener("mouseup", this.removeScale);
  }

  render () {
    const classNames = classnames(link, this.props.class);
    const container = classnames(this.props.container, this.props.hideClass);
    if (this.props.a) {
      return (
        <div className={container}>
          <a className={classNames}
            href={this.props.to}
            target={this.props.target}
            style={this.state.scale === false ? {} : scale}>
            <div className={innerContainer}
              onMouseDown={(e) => {this.handleMouseDown(e)}}>
              <Ripple removeScale={() => {this.removeScale()}}
                cursorPos={ this.state.cursorPos }>
              </Ripple>
              <span className={button}>
                {this.props.content}
              </span>
            </div>
          </a>
        </div>
      )
    } else if (this.props.to) {
      return (
        <div className={container}>
          <Link className={classNames}
            to={this.props.to}
            target={this.props.target}
            style={this.state.scale === false ? {} : scale}>
            <div className={innerContainer}
              onMouseDown={(e) => {this.handleMouseDown(e)}}>
              <Ripple removeScale={() => {this.removeScale()}}
                cursorPos={ this.state.cursorPos }>
              </Ripple>
              <span className={button}>
                {this.props.content}
              </span>
            </div>
          </Link>
        </div>
      )
    } else if (this.props.send) {
      let btn = {
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent'
      }
      return (
        <div className={container}>
          <button type="submit" className={classNames}
            style={this.state.scale === false ? btn : classnames(btn, scale)}>
            <div className={innerContainer}
              onMouseDown={(e) => {this.handleMouseDown(e)}}>
              <Ripple removeScale={() => {this.removeScale()}}
                cursorPos={ this.state.cursorPos }>
              </Ripple>
              <span className={button}>
                {this.props.content}
              </span>
            </div>
          </button>
        </div>
      )
    } else {
      return (
        <div className={container}>
          <a className={classNames}
            target={this.props.target}
            onClick={this.props.OnClick.bind(this)}
            style={this.state.scale === false ? {} : scale}>
            <div className={innerContainer}
              onMouseDown={(e) => {this.handleMouseDown(e)}}>
              <Ripple removeScale={() => {this.removeScale()}}
                cursorPos={ this.state.cursorPos }>
              </Ripple>
              <span className={button}>
                {this.props.content}
              </span>
            </div>
          </a>
        </div>
      )
    }
  }
}

Button.propTypes = {
  target: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Button
