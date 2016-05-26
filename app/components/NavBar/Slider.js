import React, { Component } from 'react'
import { Link } from 'react-router'
import { slider, visible, hidden, sliderItem, active } from './styles.css'
import classnames from 'classnames'

class Slider extends Component {
  constructor () {
    super()
  }

  render () {
    const style = {
      top: 82
    }
    const hidden = {
      display: 'none'
    }
    return (
      <div className={this.props.visible ? classnames(slider, visible) : classnames(slider)}>
        <Link className={classnames(sliderItem, active)} to="/" ><span>
          Home
        </span></Link>
        <Link className={classnames(sliderItem, active)} to="/portfolio" ><span>
            Portfolio
        </span></Link>
        <a className={classnames(sliderItem, active)} href="/images/resume.pdf" target={'_blank'}><span>
            {'R' + String.fromCharCode(233) + 'sum' + String.fromCharCode(233)}
        </span></a>
      </div>
    )
  }
}

export default Slider
