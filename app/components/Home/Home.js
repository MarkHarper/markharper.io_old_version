import React from 'react'
import { Link } from 'react-router'
import { targetButton, hireMe, title, tagline, btnInTouch, titleTag } from './styles.css'
import { home, darkBtn, inTouch } from 'sharedStyles/styles.css'
import Button from '.././Button/Button.js'

function Home (props) {
  const style = {
    height: props.height,
    width: props.width
  }
  const background = {
    backgroundColor: '#0B322E'
  }
  return (
    <div id={home} style={style}>
      <div className={hireMe}>
        <div className={titleTag}>
          <span className={title}>Software Developer</span>
          <p className={tagline}>I have a passion for code, coffee and challenging projects</p>
        </div>
        <Button a={false} content={'Get in touch'}
          container={inTouch}
          class={darkBtn}
          to={'contact'}
          target="_self">
        </Button>
      </div>
      <canvas id="background"
        height={props.height}
        width={props.width}
        style={background}>
      </canvas>
    </div>
  )
}

export default Home
