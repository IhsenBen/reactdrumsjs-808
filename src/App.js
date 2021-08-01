import "./App.css";
import Box from "./components/Box"
import React, { Component } from "react";

export default class App extends Component {
  state = {
    keys : ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  }
    render() {
      const { keys } = this.state;
    return (

      <div>
  
        <div id="drum-machine" className="App">
          <div className="title">
          <h1>Test react</h1>
          </div>
      
        <div className="container">
          <div id="display" className="display">
          {keys.map((key, idx) =>(
            <Box text={key} key={idx} />
          ))}
          </div>
        </div>
     
       
        </div>
       
      </div>
    );
  }
}
