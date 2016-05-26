import React, { Component, cloneElement }from 'react'
import { Link } from 'react-router'
import mobile from 'is-mobile'
import { app, transitionGroup } from './styles.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavBar from '.././NavBar/NavBar.js'
import Slider from '.././NavBar/Slider.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      visible: false,
      isMobile: mobile()
    }

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show () {
    this.setState({ visible: true });
    document.addEventListener("click", this.hide);
  }

  hide () {
    document.removeEventListener("click", this.hide);
    this.setState({ visible: false });
  }

  render () {
    const height = {
      height: this.props.height,
      width: this.props.width
    }
    const slider = {
      display: 'none',
      width: '100px',
      height: window.innerHeight
    }
    return (
      <div className={app}>
        <NavBar isMobile={this.state.isMobile}
          showBurger={this.show}
          location={this.props.location}
          height={this.props.height}>
        </NavBar>
        <Slider height={this.props.height} visible={this.state.visible}></Slider>
          {/*<ReactCSSTransitionGroup
            component="div"
            transitionName={this.props.animationType}
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
            styles={height}>
          </ReactCSSTransitionGroup> */}
          <div className={transitionGroup}>
            {cloneElement(this.props.children, {
              key: this.props.location.pathname,
              height: this.props.height,
              width: this.props.width
            },
            )}
          </div>


      </div>
    )
  }
}

export default App
