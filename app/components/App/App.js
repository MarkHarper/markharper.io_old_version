import React, { cloneElement }from 'react'
import styles from './transitions.css'
import { section, container, link, navbar, lightBtn } from 'sharedStyles/styles.css'
import { Link } from 'react-router'
import { app, name, nav, resume, navButton, transitionGroup, icon, hide, nameLink} from './styles.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function App (props) {
  return (
    <div className={app}>
      <div className={navbar}>
        <div className={name}>
          <span className={hide}></span>
          <Link to='/' className={nameLink}><img className={icon} src="./images/cafe.svg"/>Mark Harper</Link>
        </div>
        <div className={nav}>
          <Link to="/" className={link}><span>
            Home
          </span></Link>
          <Link to="/portfolio" className={link}><span>
            Portfolio
          </span></Link>
          <Link to="/skills" className={link}><span>
            Skills
          </span></Link>
        </div>
        <div className={resume}>
          <a href="/images/resume.pdf" target="_blank" className={lightBtn}>R&Eacute;sum&Eacute;</a>
        </div>
      </div>
      <div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName={styles}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className={transitionGroup}
        >
          {cloneElement(props.children, {
            key: props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    </div>

  )
}

export default App
