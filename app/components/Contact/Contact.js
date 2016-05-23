import React from 'react'
import { contact, form, label, input, group, bar, message } from './styles.css'
import { container } from 'sharedStyles/styles.css'

function Contact (props) {
  const style = {
    height: props.height
  }
  return (
    <div className={contact} style={style}>
      <p>
        Have a challenging project, and think I can help build it? Feel free
        to email me at <a href="mailto:markharper20@gmail.com">markharper20@gmail.com</a>
      </p>
      <form className={form} action="https://formspree.io/markharper20@gmail.com"
            method="POST">
          <div className={group}>
            <input className={input} type="text" name="name" required></input>
            <span className={bar}></span>
            <label className={label}>Name</label>
          </div>
          <div className={group}>
            <input className={input} type="text" name="email" required></input>
            <span className={bar}></span>
            <label className={label} >Email</label>
          </div>
          <div className={group}>
            <textarea className={message}
              type="textarea"
              name="message"
              rows="6"
              required></textarea>
            <span className={bar}></span>
            <label className={label}>Message</label>
          </div>
      </form>
    </div>
  )
}

export default Contact
