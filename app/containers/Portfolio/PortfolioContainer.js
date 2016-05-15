import React, { Component } from 'react'
import { Portfolio } from 'components'
import { navbar } from 'sharedStyles/styles.css'

class PortfolioContainer extends Component {
  render () {
    return (
      <Portfolio width={window.innerWidth} height={window.innerHeight - 74}/>
    )
  }
}

export default PortfolioContainer
