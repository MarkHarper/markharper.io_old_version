import React, { Component } from 'react'
import { Skills } from 'components'

class SkillsContainer extends Component{
  render () {
    return (
      <Skills width={window.innerWidth} height={window.innerHeight - 83}/>
    )
  }
}

export default SkillsContainer
