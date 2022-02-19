import React, { Component, useState } from "react";
import "../styles/App.css";
var clearSetInterval = 0;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
    this.moveBall = this.moveBall.bind(this);
    this.setup = this.setup.bind(this);
  }
  
  setup(event){
    switch(event.keyCode){
      case 37: this.setState({x : this.state.x - 5,});
        break;
      case 38: this.setState({y : this.state.y - 5,});
        break;
      case 39: this.setState({x : this.state.x + 5,});
        break;
      case 40: this.setState({y : this.state.y + 5,});
        break;
      default:
        break;
    }
    if(this.state.x === 250 && this.state.y === 250){
      document.removeEventListener("keydown", this.setup);
      this.interval();
    }
  }
  interval(){
    if(this.state.time === 0)
      clearSetInterval = setInterval(()=>{this.setState({time : this.state.time + 1})}, 1000);
    if(this.state.x === 250 && this.state.y === 250)
      clearInterval(clearSetInterval);
  }

  moveBall(){
    if(this.state.time === 0){
      this.interval();
      document.addEventListener("keydown", this.setup);
    }
  };

  render() {
    return (
      <>
        <div className="ball" style={{left : this.state.x, top : this.state.y}}></div>
        <div className="heading-timer">{this.state.time}</div>
        <button className="start" style={{margin:"5rem"}} onClick={this.moveBall}>start</button>
        <div className="hole"></div>
      </>
    );
  }
}

export default App;
