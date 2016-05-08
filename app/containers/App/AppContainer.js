import React from 'react'
import HomeContainer from '../Home/HomeContainer.js'
import ContactContainer from '../Contact/ContactContainer.js'
import { app } from 'sharedStyles/styles.css'

const App = React.createClass({
  render () {
    return (
      <div className={app}>
        <HomeContainer />
        <ContactContainer />
      </div>
    )
  },
})

export default App
