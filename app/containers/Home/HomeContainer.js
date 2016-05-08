import React from 'react'
import { Home } from 'components'

const HomeContainer = React.createClass({

  render () {
    return (
      <Home width={window.innerWidth} height={window.innerHeight}/>
    )
  },
})

export default HomeContainer
