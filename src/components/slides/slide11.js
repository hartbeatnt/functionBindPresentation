import React, { Component } from 'react';
import {Stage, Layer, Text} from 'react-konva';
import { slide11text } from './slide-texts/slide-texts';

class Slide11 extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className='slide slide4'>
        <Stage width={this.props.width} height={this.props.height}>
          <Layer>
            <Text
              text={slide11text}              
              x={this.props.width*(1/2)-350} y={this.props.height/2-75}
              fontSize='28' fontFamily='courier' align='left'
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Slide11