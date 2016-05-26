import React from 'react'
import { link, activeLink } from 'sharedStyles/styles.css'
import { Link } from 'react-router'
import { nav } from './styles.css'

function Menu ({location}) {
  return (
    <div className={nav}>
      <Link to="/" className={location.pathname === '/' ? activeLink : link}><span>
        Home
      </span></Link>
      <Link to="/portfolio" className={location.pathname === '/portfolio' ? activeLink : link}><span>
          Portfolio
      </span></Link>
      {/*<Link to="/skills" className={this.props.location.pathname === '/skills' ? activeLink : link}><span>
          About
        </span></Link> */}
    </div>
  )
}

export default Menu
