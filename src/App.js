import "./App.css";
import DrumPad from "./components/DrumPad";
import React, { Component } from "react";

const kit = [
  {
    key: "Q",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/HT/HT00.WAV?raw=true",
    name: "High Tom",
  },
  {
    key: "W",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/OH/OH75.WAV?raw=true",
    name: "Open Hit Hat",
  },
  {
    key: "E",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/CB/CB.WAV?raw=true",
    name: "Cow Bell",
  },
  {
    key: "A",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/HC/HC50.WAV?raw=true",
    name: "Hi Conga ",
  },
  {
    key: "S",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/SD/SD0075.WAV?raw=true",
    name: "Snare Drum",
  },
  {
    key: "D",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/LT/LT75.WAV?raw=true",
    name: "Low Tom",
  },
  {
    key: "Z",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/CY/CY7500.WAV?raw=true",
    name: "Cymbal",
  },
  {
    key: "X",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/BD/BD0010.WAV?raw=true",
    name: "Bass Drum",
  },
  {
    key: "C",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/sounds/CP/CP.WAV?raw=true",
    name: "Hand Clap",
  },
];
export default class App extends Component {
  constructor(props) {
    super(props);

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
      display: "Click Me  :)",
    };
  }

  handleDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div>
        <div className="App">
          <div id="drum-machine" className="container">
            <div className="header-title">
              {" "}
              <div id="name" className="title">
                <h1>
                  Rhythm Composer
                  <span>JS-808</span>
                </h1>
                <h2>React Controlled</h2>
              </div>
            </div>
            <div className="diplay-credit">
              <div id="display" className="display">
                <h1 id="display">{this.state.display}</h1>
              </div>
          
              <div className="credit">
              
                <h3>Made By <br/> Ihsen Ben Ali</h3>
                 <p>for the freeCodeCamp.org Front End Libraries certification</p>
                 <h3> <a href="https://www.ihsen.dev/" id="portfolio"  target="_blank" rel="noopener noreferrer">Portfolio</a></h3>
                 <h3><a href="https://www.freecodecamp.org/certification/fcc66bdef47-a96a-4507-97de-483d45ee0bb6/front-end-libraries"  target="_blank" rel="noopener noreferrer" id="certification">Certification</a> </h3>
                 

              </div>
            </div>
            <div className="pads">
              {" "}
              <div className="pads-container">
                {kit.map((sound, idx) => (
                  <DrumPad
                    text={sound.key}
                    key={sound.key}
                    name={sound.name}
                    audio={sound.src}
                    handleDisplay={this.handleDisplay}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
