import React from 'react'
import { test, homeText } from './styles.css'
import BackgroundHome from './BackgroundHome.js'
import p5 from 'p5'

function Home ({ width, height }) {
  console.log(width, height);
  new p5(BackgroundHome(width, height), 'home')
  return (
    <div id="home">
      <div className={homeText}>
        <p className={test}>
          Mark Harper
        </p>
        <p className={test}>
          Software Developer
        </p>
      </div>
      <div className={homeText}>
        <span className={test}>
          Home
        </span>
        <span className={test}>
          Portfolio
        </span>
        <span className={test}>
          Get in Touch
        </span>
      </div>
    </div>
  )
}

export default Home
