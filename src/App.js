import "./App.css";
import Box from "./components/Box"
import React, { Component } from "react";

export default class App extends Component {
  state = {
    // I should replace this by an array of objects  with the key name, src of the audio file and the name of the audio
    // map through the array of objects
    // pass the elements as props in the app component
    //use the props in the box.jsx component
    // create a method that handle click play sounds on that component
    // create a method that handle press play sounds on that component with this e.keyCode === this.props.letter.charCodeAt()
    // create a method that handle the display of the same of the sound on that component and  call in the above methods
    //call the handle click method on the drumpad div with onClick
    // voila voilou faut just coder tout ça bordel de merde/ i just need to code all this damn it
    
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

          <div className="drum-display"><p>Test Sound</p></div>
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
