import "./App.css";
import DrumPad from "./components/DrumPad";
import React, { Component } from "react";
import soundfile from './sounds/kick.mp3'

const kit = [
  {
    key: "Q",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/b3bf6f483f2f88b950bf54b04b526c42013a9fcd/src/sounds/bassdrum.WAV",
    name: "Low Tom",
  },
  {
    key: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Low Conga",
  },
  {
    key: "E",
    src: {soundfile},
    name: "Cow Bell",
  },
  {
    key: "A",
    src: "./sounds/openhat.wav",
    name: "Open Hat",
  },
  {
    key: "S",
    src: "./sounds/snaredrum.wav",
    name: "Snare Drum",
  },
  {
    key: "D",
    src: "./sounds/lowtom.wav",
    name: "Low Tom",
  },
  {
    key: "Z",
    src: "./sounds/bassdrum.wav",
    name: "Bass Drum",
  },
  {
    key: "X",
    src: "./sounds/midtown.wav",
    name: "Mid Town",
  },
  {
    key: "C",
    src: "./sounds/handclap",
    name: "Hand Clap",
  },
];
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
  };

  render() {
    return (
      <div>
        <div id="drum-machine" className="App">
          <div className="title">
            <h1>Test react</h1>
          </div>

          <div className="container">
            <div className="drum-display">
              <h1>Test Sound</h1>
            </div>
            <div id="display" className="display">
              {kit.map((sound, idx) => (
                <DrumPad text={sound.key} key={sound.key} audio={sound.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
