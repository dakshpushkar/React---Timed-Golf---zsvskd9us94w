import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }



  render() {
    return (
      <> 
      <div className="heading-timer">
        <span>{this.props.time} s</span>
      </div>
      </>
    );
  }
}

export default Timer;