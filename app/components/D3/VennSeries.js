import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import d3 from 'd3'
import Circle from './Circle'

class VennSeries extends Component {
  render() {
    let props = this.props;
    let circles = this.props.categories.map(function(category, i) {
      let dx = 0;
      let dy = 0;
      if (i==0) {
        dx = -140;
        dy = 0;
      } else if (i==1) {
        dx = -75;
        dy = 0;
      } else if (i==2){
        dx = -55;
        dy = 35;
      }
      return (
        <Circle x={props.x[i]}
          y={props.y[i]}
          r={props.r}
          color={props.color[i]}
          category={category}
          key={i}
          order={i}
          dx={dx}
          dy={dy}/>
      )
    });

    return (
      <g>
        {circles}
      </g>
    )
  }
}

VennSeries.propTypes = {
  r: PropTypes.number.isRequired,
  x: PropTypes.array.isRequired,
  y: PropTypes.array.isRequired,
  color: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default VennSeries
