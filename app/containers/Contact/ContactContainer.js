import React from 'react'
import { Contact } from 'components'

const ContactContainer = React.createClass({
  render () {
    return (
      <Contact width={window.innerWidth} height={window.innerHeight - 81}/>
    )
  },
})

export default ContactContainer
