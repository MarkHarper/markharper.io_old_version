import React from 'react'
import { contact, form, label, input, group, bar, message,
  sendBtn, sendContainer, send, backBtn, backContainer, back} from './styles.css'
import { container } from 'sharedStyles/styles.css'
import Button from '.././Button/Button.js'
import axios from 'axios'

function formSpree (evt) {
  evt.preventDefault();
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  axios.post('https://formspree.io/markharper20@gmail.com', {
    message: message.value,
    email: email.value,
    name: name.value
  }).then(function (response) {
    console.log(response)
  }).catch(function (response) {
    console.log(response);
  })
}

function Contact (props) {
  const style = {
    minHeight: props.height + 82,
    width: props.width
  }
  const hide = {
    visibility: 'hidden'
  }
  return (
    <div className={contact} style={style}>
      <Button a={false} content={'Back'}
        OnClick={props.back}
        class={backBtn}
        container={backContainer}
        target="_self"
        hideClass={back}>
      </Button>
      <p>
        Have a challenging project, and think I can help build it? Feel free
        to email me at <a href="mailto:markharper20@gmail.com">markharper20@gmail.com</a>
      </p>
      <form id="form" className={form} action="https://formspree.io/markharper20@gmail.com"
        method="POST">
          <div className={group}>
            <input className={input} id="name" type="text" name="name" required></input>
            <span className={bar}></span>
            <label className={label}>Name</label>
          </div>
          <div className={group}>
            <input className={input} id="email" type="text" name="email" required></input>
            <span className={bar}></span>
            <label className={label} >Email</label>
          </div>
          <div className={group}>
            <textarea className={message}
              id="message"
              type="textarea"
              name="message"
              rows="6"
              required></textarea>
            <span className={bar}></span>
            <label className={label}>Message</label>
          </div>
          <Button a={false} content={'Send'}
            OnClick={(evt) => {formSpree(evt)}}
            class={send}
            container={sendContainer}
            target="_self"
            hideClass={send}
            send={true}>
          </Button>
      </form>
    </div>
  )
}

export default Contact
