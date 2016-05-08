import React from 'react'
import { name, title, nameTitle, nameTitleContainer, nav, navContainer } from './styles.css'
import { section } from 'sharedStyles/styles.css'
import { Link } from 'react-router'

function Home () {
  return (
    <div id="home" className={section}>
      <div className={nameTitleContainer}>
        <div className={nameTitle}>
          <p className={name}>
            Mark Harper
          </p>
          <p className={title}>
            Software Developer
          </p>
        </div>
      </div>
      <div className={navContainer}>
        <div className={nav}>
          <Link to="/"><span>
            Home
          </span></Link>
          <Link to="/portfolio"><span>
            Portfolio
          </span></Link>
          <Link to="/skills"><span>
            Skills
          </span></Link>
          <Link to="/articles"><span>
            Articles
          </span></Link>
          <Link to="/contact"><span>
            Hire Me
          </span></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
