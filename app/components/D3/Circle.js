import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import d3 from 'd3'

class Circle extends Component {
  addText (selection) {
    selection
      .select("text")
        .text((d) => d.category)
        .attr('x', (d) => d.x)
        .attr('y', (d) => d.y)
        .attr('dx', (d) => d.dx)
        .attr('dy', (d) => d.dy)
        .attr('fill', 'white')
        .attr('font-family', 'Ubuntu, Sans Serif')
        .attr('font-size', '1.5em')
        .attr('opacity', 0)
        .attr('z-index', 1000)


    selection
      .select("text")
        .transition()
        .ease('cubic')
        .delay(function (d) {
          return d.order * 150;
        })
        .duration(1250)
        .attr('opacity', 1)
  }

  enter (selection) {
    selection
      .select('circle')
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", (d) => 0)
        .attr("fill", (d) => d.color)
        .attr("opacity", 0)
        .attr("fill-opacity", ".5");

    selection
      .select('circle')
        .transition()
        .ease('cubic')
        .delay(function (d) {
          return d.order * 150;
        })
        .duration(1000)
        .attr('opacity', 1)
        .attr('r', (d) => d.r);
  }
  componentDidMount () {
    d3.select(findDOMNode(this))
      .datum(this.props)
      .call(this.addText)
      .call(this.enter);
  }
  render() {
    return (
      <g>
        <circle className={'circle'}></circle>
        <text>this.props.category</text>
      </g>
    )
  }
}

Circle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

export default Circle
