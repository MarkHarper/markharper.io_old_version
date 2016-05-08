import React from 'react'
import { articles } from './styles.css'
import { section, container } from 'sharedStyles/styles.css'

function Articles () {
  return (
    <div className={section}>
      <div id="wrapper" className={articles}>
        <section className={container}>
          <h3>General Information</h3>
          <p>I am currently seeking front end development work, as I have recently The Iron Yard's front end engineering program.</p>
          <p>If you would like to hire me, work with me, or simply want to talk about web development, it is best to reach me through email.</p>
        </section>
        <section className={container}>
          <h3>Contact Details</h3>
          <ul class="contact-info">
            <li class="phone"><a href="tel:919-698-9265">(919)-698-9265</a></li>
            <li class="mail"><a href="mailto:markharper20@gmail.com">markharper20@gmail.com</a></li>
            <li class="twitter"><a href="http://twitter.com/intent/tweet?screen_name=nickrp">@IAmMarkHarper</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Articles
