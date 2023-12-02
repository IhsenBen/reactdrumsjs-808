import React, { useState } from "react";
import DrumPad from "./components/DrumPad";
import "./App.css";

const kit = [
  {
    key: "Q",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/sounds/HT/HT00.WAV?raw=true",
    name: "High Tom",
  },
  {
    key: "W",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/sounds/OH/OH75.WAV?raw=true",
    name: "Open Hit Hat",
  },
  {
    key: "E",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/sounds/CB/CB.WAV?raw=true",
    name: "Cow Bell",
  },
  {
    key: "A",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/sounds/HC/HC50.WAV?raw=true",
    name: "Hi Conga ",
  },
  {
    key: "S",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/sounds/SD/SD0075.WAV?raw=true",
    name: "Snare Drum",
  },
  {
    key: "D",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/sounds/LT/LT75.WAV?raw=true",
    name: "Low Tom",
  },
  {
    key: "Z",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/sounds/CY/CY7500.WAV?raw=true",
    name: "Cymbal",
  },
  {
    key: "X",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/sounds/BD/BD0010.WAV?raw=true",
    name: "Bass Drum",
  },
  {
    key: "C",
    src: "https://github.com/IhsenBen/reactdrumsjs-808/blob/master/src/assets/assets/sounds/CP/CP.WAV?raw=true",
    name: "Hand Clap",
  },
];

const App: React.FC = () => {
  const [display, setDisplay] = useState<string>("Click Me :)");

  const handleDisplay = (newDisplay: string) => setDisplay(newDisplay);

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
              <h1 id="display">{display}</h1>
            </div>

            <div className="credit">
              <h3>
                Made By <br /> Ihsen Ben Ali
              </h3>
              <p>for the freeCodeCamp.org Front End Libraries certification</p>
              <h3>
                {" "}
                <a
                  href="https://www.ihsen.dev/"
                  id="portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.freecodecamp.org/certification/fcc66bdef47-a96a-4507-97de-483d45ee0bb6/front-end-libraries"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="certification"
                >
                  Certification
                </a>{" "}
              </h3>
            </div>
          </div>
          <div className="pads">
            {" "}
            <div className="pads-container">
              {kit.map((sound) => (
                <DrumPad
                  text={sound.key}
                  key={sound.key}
                  name={sound.name}
                  audio={sound.src}
                  handleDisplay={handleDisplay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
