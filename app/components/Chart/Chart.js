import React, { Component } from 'react';
import { render } from 'react-dom';

const styles = {
  transparentBg: {
    background: 'transparent'
  },
  space: {
    marginTop: '25px',
  },
  shadow: {
    // boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    // transform: 'translate(50%, 50%)',
    padding: '2em'
  },
  title: {
    align: 'middle',
    fontSize: '16px'
  },
  margin: {
    margin: 'auto auto'
  }
}

class Chart extends Component {
  render() {
    return (
      <svg style={styles.shadow} width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    )
  }
}

export default Chart
