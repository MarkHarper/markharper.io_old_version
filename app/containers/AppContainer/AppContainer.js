import React, { Component } from 'react'
import {App} from 'components'

class AppContainer extends Component {
  render () {
    return (
      <App children={this.props.children} location={this.props.location}/>
    )
  }
}

export default AppContainer
