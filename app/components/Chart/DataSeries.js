import React, { Component } from 'react'
import { render } from 'react-dom'
import d3 from 'd3'
import ReactTransitionGroup from 'react-addons-transition-group'
import Bar from './Bar'

class DataSeries extends Component {
  componentWillMount() {
    var that = this;
    setInterval(function () {
      console.log('this');
      that.setState({
        data: d3.shuffle([10, 20, 40, 100])
      })
    }, 1000);
  }
  render() {
    let props = this.props;
    let bars = this.props.data.map(function(point, i) {
      return (
        <Bar height={props.height - props.yScale(point)}
          width={props.xScale.rangeBand()}
          offset={props.xScale(i)}
          availableHeight={props.height}
          color={props.color}
          yScale={props.yScale}
          value = {point}
          key={i} />
      )
    });

    return (
      <g>
        {bars}
      </g>
    )
  }
}

export default DataSeries
