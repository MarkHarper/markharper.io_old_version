import React, { Component } from 'react'
import { Portfolio } from 'components'
import { navbar } from 'sharedStyles/styles.css'

class PortfolioContainer extends Component {
  render () {
    return (
      <Portfolio width={this.props.width} height={this.props.height}/>
    )
  }
}

export default PortfolioContainer
