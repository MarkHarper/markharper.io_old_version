import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import 'd3';

class Axis extends Component {
  renderAxis() {
    let axis = d3.svg.axis().scale(this.props.scale)
                            .orient(this.props.orient)
                            .ticks(4);
    d3.select(findDOMNode(this)).call(axis);
  }

  componentDidMount() {
    this.renderAxis();
  }

  render() {

    let translate = "translate(0,"+(this.props.height)+")";

    return (
      <g className={this.props.className} transform={this.props.axisType == 'xAxis' ? translate:""}>
      </g>
    )
  }
}

export default Axis
