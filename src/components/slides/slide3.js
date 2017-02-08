import React, { Component } from 'react';

class Slide3 extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className='slide slide3'>
        <iframe frameborder="0" width="100%" height={this.props.height} src="https://repl.it/FbGF/10"></iframe>
      </div>
    )
  }
}

export default Slide3
