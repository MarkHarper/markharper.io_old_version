import React, { Component } from 'react';
import { render } from 'react-dom';
import d3 from 'd3';
import Chart from './Chart.js'
import Axis from './Axis.js'
import { axis } from './Axis.css'
import DataSeries from './DataSeries.js'

class BarChart extends Component {
  render() {
    let x = this.props.data.map(function (obj) {
      return Object.keys(obj)[0];
    });
    let y = this.props.data.map(function (obj) {
      let key = Object.keys(obj)[0];
      return obj[key];
    });;
    let yMax = Math.max(...y);

    let yScale = d3.scale.linear()
      .domain([0,yMax])
      .range([this.props.height, 0]);

    let xScale = d3.scale.ordinal()
      .domain(d3.range(x.length))
      .rangeRoundBands([0, this.props.width], this.props.barPadding);

    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={y}
                    width={this.props.width}
                    height={this.props.height}
                    color={this.props.color}
                    xScale={xScale}
                    yScale={yScale} />
        <Axis axisType={'yAxis'} height={this.props.height} className={axis} scale={yScale} orient={'left'} />
        <Axis axisType={'xAxis'} height={this.props.height} className={axis} scale={xScale} orient={'bottom'} />
      </Chart>
    )
  }
};

export default BarChart
