import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store/store.config'
import * as actions from './actions/actiontypes'
import './styles/App.css';

class App extends Component {
    keyDownHandler(e) {
        // if ( e.keyCode == 37) store.dispatch({type: "prev"});
        if ( e.keyCode == 39) store.dispatch({type: actions.NEXT_SLIDE});
    }

    componentDidMount() {
        window.addEventListener("keydown", this.keyDownHandler );
        console.log(store)
    }

    componentWillUnmout() {
        window.removeEventListener( "keydown", this.keyDownHandler )
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Function Bind</h2>
        </div>
        <p className="App-intro">
          content goes here
          {store.currentSlide}
        </p>
      </div>
    );
  }
}

export default App;
