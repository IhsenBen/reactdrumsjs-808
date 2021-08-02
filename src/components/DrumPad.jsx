import "../App.css";

import React from "react";


export default class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      
      this.audio = React.createRef();
    }
    


  
    
     handleClick = () => {
       console.log(this.audio)
       this.audio.play()
       this.audio.currentTime = 0
      
     }
     
    
    render() {
      const { text, audio } = this.props;
      
      return (
        <div className="drum-pad" onClick={this.handleClick} id={`drum-${text}`}>
          {text}
          <audio  src={audio} className="clip"  ref={ref => this.audio = ref} id={text} />
        </div>
      )
    }

    
  }
      
  document.addEventListener('keydown', (e) => {

    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    console.log(id);
    if(audio) {
      audio.currentTime = 0;
      console.log(audio)
      audio.play();
    }
  });