import React, { Component, useState } from "react";
import "../styles/App.css";
class Start extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {  

  }

  componentWillUnmount() {
    
  }
  onClickHandler(){
    this.props.startGame();
  }


  render() {
    return this.props.hideStartButton 
      ?<></> 
      :(
        <> 
          <div className="ballProvider" onClick={this.onClickHandler}>START</div>
        </>
      );
  }
}

export default Start;