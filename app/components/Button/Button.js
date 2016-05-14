import React from 'react'
import { lightBtn } from 'sharedStyles/styles.css'
import { ink, animate } from './styles.css'
import { Link } from 'react-router'
import classnames from 'classnames'

function Button (props) {
  var inkClass = classnames({
      ink: true
    });
  function ripple (e) {
    var ink = e.currentTarget.querySelector('.ink');
    ink.classList.remove('animate');

    if(!ink.offsetHeight && !ink.offsetWidth){
      var d = Math.max(self.offsetWidth, self.offsetHeight);
      ink.style.height = d;
      ink.style.width = d;
    }
    e.preventDefault();
    var x = e.pageX - ink.offsetWidth/2;
    var y = e.pageY - ink.offsetHeight/2;

    ink.style.top = y+'px';
    ink.style.left = x+'px';
    ink.classList.add('animate');
  };
  return (
    <div onMouseDown={ripple} className={props.containerClass}>
      <span className={inkClass}></span>
      <Link to={props.link} target={props.target} className={props.class}>{props.content}</Link>
    </div>
  )
}

export default Button
