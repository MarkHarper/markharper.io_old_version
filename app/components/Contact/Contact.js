import React from 'react'
import { test } from './styles.css'
import { section } from 'sharedStyles/styles.css'

function Contact ({width, height}) {
  return (
    <div className={section}>
      <div>
        <p className={test}>
          Mark Harper
        </p>
        <p className={test}>
          Software Developer
        </p>
      </div>
      <div>
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

export default Contact
