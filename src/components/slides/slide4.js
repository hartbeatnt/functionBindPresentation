import React, { Component } from 'react';
import {Stage, Layer, Text} from 'react-konva';

class Slide4 extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className='slide slide4'>
        <Stage width={this.props.width} height={this.props.height}>
          <Layer>
            <Text
              text={'so how do we code it?'}              
              x={this.props.width*(1/2)-150} y={this.props.height/2-14}
              fontSize='28' fontFamily='courier' align='left'
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Slide4