import React, { Component, useState } from "react";
import "../styles/App.css";

class Ball extends React.Component {
  constructor(props) {
    super(props);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.myRef = React.createRef();
  }

  componentDidMount() {
  }
  
  componentDidUpdate() {
    if(this.props.hideStartButton){
      this.myRef.current.focus();
      console.log("Focus on the ball");
    }
  }

  componentWillUnmount() {}

  //   left arrow	37
  //   up arrow	38
  //   right arrow	39
  //   down arrow	40
  keyDownHandler(event) {
    switch (event.keyCode) {
      case 37:
        console.log("LEFT");
        this.props.left();
        break;
      case 38:
        console.log("UP");
        this.props.up();
        break;
      case 39:
        console.log("RIGHT");
        this.props.right();
        break;
      case 40:
        console.log("DOWN");
        this.props.down();
        break;

      default:
        break;
    }

    if(this.props.position.x === 250 && this.props.position.y === 245) {
      console.log("Ball in the hole!");
      this.props.stopGame();
    }

    //console.log(`x: ${this.props.position.x}px, y: ${this.props.position.y}px`);
  }

  render() {
    return (
      <>
        <div
          onKeyDown={this.keyDownHandler}
          className="ball"
          tabIndex="0"
          style={{
            left: this.props.position.x + "px",
            top: this.props.position.y + "px",
          }}
          ref={this.myRef}
        ></div>
      </>
    );
  }
}

export default Ball;