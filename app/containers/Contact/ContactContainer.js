import React, { Component } from 'react'
import { Contact } from 'components'

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight - 82
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize (e) {
    this.setState({
      width: window.outerWidth,
      height: window.innerHeight - 82
    });
  }

  render () {
    return (
      <Contact back={this.props.history.goBack} width={this.state.width} height={this.state.height}/>
    )
  }
}

export default ContactContainer
