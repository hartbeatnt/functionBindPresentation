import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store/store.config'
import * as actions from './actions/actiontypes'
import slides from './components/slides'
import './styles/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {width:null, height:null}
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentWillMount(){
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keyDownHandler);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownHandler);
    window.removeEventListener("resize", this.updateDimensions);
  }

  keyDownHandler(e) {
    if (e.keyCode == 37) store.dispatch({type: actions.PREV_SLIDE});
    if (e.keyCode == 39) store.dispatch({type: actions.NEXT_SLIDE});
  }

  updateDimensions(){
    this.setState({width: window.innerWidth-10, height: window.innerHeight-100})
    console.log(this.state)
  }

  render() {
    let CurrentSlide = slides[`Slide${this.props.slide.number}`]
    return (
      <div className="App">
        <div className="App-header">
          <h2>Function Bind</h2>
        </div>
        <CurrentSlide width={this.state.width} height={this.state.height}/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    slide: state.slide
  }
}

export default connect(mapStateToProps)(App);
