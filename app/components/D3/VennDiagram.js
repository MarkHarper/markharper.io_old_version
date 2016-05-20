import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import d3 from 'd3';
import Chart from './Chart.js'
import VennSeries from './VennSeries.js'

const styles = {
  transparentBg: {
    background: 'transparent'
  },
  space: {
    marginTop: '25px',
  },
  shadow: {
    padding: '2em 2em 2em 2em',
    overflow: 'hidden'
  },
  title: {
    align: 'middle',
    fontSize: '16px'
  },
  margin: {
    margin: '0 auto'
  }
}

class VennDiagram extends Component {
  render() {
    let w = 0.7*this.props.width;
    let h = 0.7*this.props.height;
    let overlap = 25;
    let dx12 = (h/2) + overlap;
    let dy13 = (h/2) + overlap;
    let r = (w-dx12)/2;
    let x1 = (w/2)-(dx12/2)+(w*9/40);
    let x2 = (w/2)+(dx12/2)+(w*9/40);
    let x3 = (w/2)+(w*9/40);
    let y1 = (h/2)-(dy13/2)+(h*9/40);
    let y2 = (h/2)-(dy13/2)+(h*9/40);
    let y3 = (h/2)+(dy13*1/3)+(h*10/40);
    return (
      <Chart style={styles.shadow} width={this.props.width} height={this.props.height}>
        <VennSeries
          x={[x1, x2, x3]}
          y={[y1, y2, y3]}
          r={r}
          color={['#777', 'rgb(0, 49, 74)', 'rgb(48, 206, 255)']}
          categories={['App Development', 'Data Visualization', 'UI/UX Design']}/>
      </Chart>
    )
  }
};

VennDiagram.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default VennDiagram
