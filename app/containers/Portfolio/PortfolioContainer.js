import React from 'react'
import { Portfolio } from 'components'

const PortfolioContainer = React.createClass({
  render () {
    return (
      <Portfolio width={window.innerWidth} height={window.innerHeight - 73}/>
    )
  },
})

export default PortfolioContainer
