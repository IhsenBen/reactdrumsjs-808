import "../App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-red.css";
import React from "react";

export default class DrumPad extends React.Component {

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);

    window.focus();
  }
 
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }


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
    const { text, audio } = this.props;

    return (
      <div className="drum-pad" onClick={this.handleClick} id={`b-${text}`}>
        <AwesomeButton type="secondary" >
          {text}
        </AwesomeButton>

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
