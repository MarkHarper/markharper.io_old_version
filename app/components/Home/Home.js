import React from 'react'
import { Link } from 'react-router'
import { targetButton, hireMe, title, tagline, btnInTouch, titleTag } from './styles.css'
import { home, darkBtn } from 'sharedStyles/styles.css'

function Home (props) {
  return (
    <div id={home}>
      <div className={hireMe}>
        <div className={titleTag}>
          <span className={title}>Javascript Developer</span>
          <p className={tagline}>I have a passion for code, coffee and challenging projects</p>
        </div>
        <div className={btnInTouch}>
          <Link to="/contact" className={darkBtn}>Get In Touch</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
