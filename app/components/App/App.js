import React, {cloneElement}from 'react'
import styles from './transitions.css'
import { section, container } from 'sharedStyles/styles.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function App (props) {
  return (
    <ReactCSSTransitionGroup
      component="div"
      transitionName={styles}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      className="trans"
    >
      {cloneElement(props.children, {
        key: props.location.pathname
      })}
    </ReactCSSTransitionGroup>
  )
}

export default App
