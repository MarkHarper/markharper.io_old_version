import React from 'react'
import { Home } from 'components'
import Background from './Background.js'

const HomeContainer = React.createClass({
  componentDidMount() {
    Background()
  },
  render () {
    return (
      <Home />
    )
  },
})

export default HomeContainer
