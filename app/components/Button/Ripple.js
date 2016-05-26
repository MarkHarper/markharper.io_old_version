import React, { PropTypes, Component } from 'react'
import { ink, animate } from './styles.css'
import { Link } from 'react-router'
import classnames from 'classnames'

class Ripple extends Component {
  constructor () {
    super()
    this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
    this.ripple = this.ripple.bind(this);
  }
  ripple (cursorPos) {
    let rippleStyle = {};
    let ripple = this.refs.ripple;
    let parent = ripple.parentElement;
    let parentPos = parent.getBoundingClientRect();
    let center = Math.max(parent.offsetHeight, parent.offsetWidth);

    this.setState({
      animate: true,
      width: center - 2,
      height: center - 2,
      top: cursorPos.top - parentPos.top - (center/2),
      left: cursorPos.left - parentPos.left - (center/2)
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.cursorPos.time !== this.props.cursorPos.time){
      if(this.state.animate){
        this.setState({ animate: false }, () => {
          this.ripple(nextProps.cursorPos)
        })
      }
      else {
        this.ripple(nextProps.cursorPos)
      }
    }
  }

  render () {
    return (
      <span className={ink + ' ' + (this.state.animate ? animate : '')} ref="ripple" style={{
        top: this.state.top+"px",
        left: this.state.left+"px",
        width: this.state.width+"px",
        height: this.state.height+"px"}}>
      </span>
    )
  }
}

Ripple.propTypes = {
  cursorPos: PropTypes.object.isRequired,
  removeScale: PropTypes.func.isRequired
}

export default Ripple
