import "../App.css";

import React from "react";

export default class DrumPad extends React.Component {


//pass the event listener to the e function
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }
// close the event listener  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }
// the above was like an open/close door to pass the key input ( not sure, but I think it's an outdated method)

  handleClick = () => {
    console.log(this.audio);
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.name);
  };

  handleKeydown = (e) => {
    if (e.keyCode === this.props.text.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.name);
    }
  };

  render() {
    const { text, audio, name } = this.props;

    return (
      <div className="drum-pad" onClick={this.handleClick} id={`b-${text}`}>
        {text}
        <audio
          src={audio}
          className="clip"
          ref={(ref) => (this.audio = ref)}
          id={text}
        />
      </div>
    );
  }
}

// dosen't handle the display text state onchange
// document.addEventListener('keydown', (e) => {

//   const id = e.key.toUpperCase();
//   const audio = document.getElementById(id);
//   // console.log(id);
//   if(audio) {
//     audio.currentTime = 0;

//     console.log(audio);
//     audio.play();
//   }
// });
