import "./App.css";
import DrumPad from "./components/DrumPad";
import React, {Component } from "react";


const kit = [
  {
    key: "Q",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/gh-pages/sounds/kick.mp3?raw=true",
    name: "Low Tom",
  },
  {
    key: "W",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/lowconga.WAV?raw=true",
    name: "Low Conga",
  },
  {
    key: "E",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/cowbell.WAV?raw=true",
    name: "Cow Bell",
  },
  {
    key: "A",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/openhat.WAV?raw=true",
    name: "Open Hat",
  },
  {
    key: "S",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/snaredrum.WAV?raw=true",
    name: "Snare Drum",
  },
  {
    key: "D",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/lowtom.WAV?raw=true",
    name: "Low bla",
  },
  {
    key: "Z",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/bassdrum.WAV?raw=true",
    name: "Bass Drum",
  },
  {
    key: "X",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/midtown.WAV?raw=true",
    name: "Mid Town",
  },
  {
    key: "C",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/handclap.WAV?raw=true",
    name: "Hand Clap",
  },
];
export default class App extends Component {  constructor(props){
  super(props)



  this.state = {
    // I should replace this by an array of objects  with the key name, src of the audio file and the name of the audio
    // map through the array of objects
    // pass the elements as props in the app component
    //use the props in the box.jsx component
    // create a method that handle click play sounds on that component
    // create a method that handle press play sounds on that component with this e.keyCode === this.props.letter.charCodeAt()
    // create a method that handle the display of the same of the sound on that component and  call in the above methods
    //call the handle click method on the drumpad div with onClick
    // voila voilou faut just coder tout ça bordel de merde/ i just need to code all this damn it
    display:"hey!"
  };
}



  handleDisplay = display => this.setState({ display })

  render() {
    return (
      <div>
        <div className="App">
          <div id="drum-machine" className="container">
          <div className="title">
            <h1>Drum Machine</h1>
          </div>

          <div className="container">
            <div  id="display" className="display">
              <h1 id="display">{this.state.display}</h1>
            </div>
            <div  className="pads-container">
              {kit.map((sound, idx) => (
                <DrumPad text={sound.key} key={sound.key} name={sound.name} audio={sound.src}  handleDisplay={this.handleDisplay}/>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
