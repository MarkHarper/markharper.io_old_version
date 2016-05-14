import React from 'react'
import { Skills } from 'components'

const SkillsContainer = React.createClass({
  render () {
    return (
      <Skills width={window.innerWidth} height={window.innerHeight - 73}/>
    )
  },
})

export default SkillsContainer
