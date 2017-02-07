import React, { Component } from 'react';
import {Stage, Layer, Rect} from 'react-konva';

class Slide1 extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className='title slide slide0'>
        <Stage width={this.props.width} height={this.props.height}>
          <Layer>
            <Rect
              x={this.props.width/2} y={this.props.height/2} width={50} height={50}
              fill='lightblue'
              shadowBlur={10}
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Slide1

