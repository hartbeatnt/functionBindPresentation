import React, { Component } from 'react';
import {Stage, Layer, Text} from 'react-konva';

class Slide2 extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className='slide slide1'>
        <Stage width={this.props.width} height={this.props.height}>
          <Layer>
            <Text
              text={
              '{\n'+
              '   name: Dr. DarkCloud,\n'+
              '   strength: 250,\n'+
              '   canFly: true\n'+
              '}\n'
              }
              x={this.props.width*(1/2)-150} y={this.props.height/2-150} width={300} height={300}
              fontSize='18' fontFamily='courier' align='left'
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Slide2