import React, { Component } from 'react';
import {Stage, Layer, Text} from 'react-konva';

class Slide9 extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className='slide slide4'>
        <Stage width={this.props.width} height={this.props.height}>
          <Layer>
            <Text
              text={
                'we need to be able to pass in arguments\n'+
                '    when defining the bound function'}              
              x={this.props.width*(1/2)-450} y={this.props.height/2-14}
              fontSize='28' fontFamily='courier' align='left'
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Slide9