import React, { Component, useState } from "react";

import Ball from "./Ball";
import Hole from "./Hole";
import Start from "./Start";
import Timer from "./Timer";

import "../styles/App.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      time: 0, 
      x: 0, 
      y: 0, 
      interval: 0, 
      hideStartButton: false 
    };
    
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);

    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
  }

  left() {
    this.setState({
      x: this.state.x - 5
    })
  }

  right() {
    this.setState({
      x: this.state.x + 5
    })
  }

  up() {
    this.setState({
      y: this.state.y - 5
    })
  }

  down() {
    this.setState({
      y: this.state.y + 5
    })
  }

  startGame() {
    this.setState({
      hideStartButton: true
    })

    this.state.interval = setInterval(()=> {
      this.setState({
        time: this.state.time + 1
      })

    }, 1000);

  }

  stopGame() {
    clearInterval(this.state.interval);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }



  render() {
    return (
      <> 
        <Ball position={{x:this.state.x, y:this.state.y}} 
          left={this.left}
          right={this.right}
          up={this.up}
          down={this.down}
          stopGame={this.stopGame}
          hideStartButton={this.state.hideStartButton}/>

        <Hole />
        <Start startGame={this.startGame} hideStartButton={this.state.hideStartButton}/> 
        <Timer time={this.state.time}/>
      </>
    );
  }
}

export default App;