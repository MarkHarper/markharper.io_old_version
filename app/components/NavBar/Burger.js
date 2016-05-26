import React, { Component } from 'react'
import { Link } from 'react-router'
import { hamburger } from './styles.css'

function Burger (props) {
  return (
    <span className={hamburger} onClick={props.showBurger}>|||</span>
  )
}

export default Burger
