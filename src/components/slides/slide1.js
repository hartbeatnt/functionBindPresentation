import React, { Component } from 'react';
import {Stage, Layer, Rect, Text} from 'react-konva'

class Slide1 extends Component {
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
              '   name: FlyGuy,\n'+
              '   strength: 175,\n'+
              '   canFly: true\n'+
              '}\n'
              }
              x={this.props.width*(1/3)-250} y={this.props.height/2-150} width={500} height={300}
              fontSize='18' fontFamily='courier' align='left'
            />
            <Text
              text={
              '{\n'+
              '   name: Thad Strongbro,\n'+
              '   strength: 500,\n'+
              '   getSwol: function() {\n'+
              '     this.strength = 2 * this.strength;\n'+
              '     return \`${this.name}\'s strength\n'+
              '              is now ${this.strength}\`;\n'+
              '   }\n'+
              '}\n'
              }
              x={this.props.width*(2/3)-250} y={this.props.height/2-150} width={500} height={300}
              fontSize='18' fontFamily='courier' align='left'
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Slide1

