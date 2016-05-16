import React, { Component } from 'react';
import { render } from 'react-dom';
import 'd3';
import Chart from './Chart.js'
import Axis from './Axis.js'
import DataSeries from './DataSeries.js'

class BarChart extends Component {
  render() {

    let yScale = d3.scale.linear()
      .domain([1,4])
      .range([this.props.height, 0]);

    let xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={this.props.data}
                    width={this.props.width}
                    height={this.props.height}
                    color={this.props.color}
                    xScale={xScale}
                    yScale={yScale} />
        <Axis height={this.props.height} className="yAxis" scale={yScale} orient={'left'} />
        <Axis height={this.props.height} className="xAxis" scale={xScale} orient={'bottom'} />
      </Chart>
    )
  }
};

export default BarChart
