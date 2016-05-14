import React from 'react'
import { articles } from './styles.css'
import { container } from 'sharedStyles/styles.css'

function Articles () {
  return (
    <div id={articles}>
      <ul>
        <li>
          <a>How to use p5js in an React project?</a>
        </li>
      </ul>
    </div>
  )
}

export default Articles
