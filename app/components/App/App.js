import React, { cloneElement }from 'react'
import { section, container, link, activeLink, navbar, lightBtn } from 'sharedStyles/styles.css'
import { Link } from 'react-router'
import { app, name, nav, resume, navButton, transitionGroup, icon, hide, nameLink} from './styles.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function App (props) {
  console.log(props)
  const height = {
    height: props.height
  }
  return (
    <div className={app}>
      <div className={navbar}>
        <div className={name}>
          <span className={hide}></span>
          <Link to='/' className={nameLink}><img className={icon} src="./images/cafe.svg"/>Mark Harper</Link>
        </div>
        <div className={nav}>
          <Link to="/" className={props.location.pathname === '/' ? activeLink : link}><span>
            Home
          </span></Link>
          <Link to="/portfolio" className={props.location.pathname === '/portfolio' ? activeLink : link}><span>
              Portfolio
            </span></Link>
          <Link to="/skills" className={props.location.pathname === '/skills' ? activeLink : link}><span>
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
          transitionName={props.animationType}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className={transitionGroup}
          styles={height}
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
