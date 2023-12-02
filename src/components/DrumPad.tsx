import AwesomeButtonStyles from 'react-awesome-button/src/styles/themes/theme-eric/styles.module.scss';
import "../App.css";
import { AwesomeButton } from "react-awesome-button";
import React, { useEffect, useRef, useCallback } from "react";


interface DrumPadProps {
  text: string;
  audio: string;
  name: string;
  handleDisplay: (name: string) => void;
}

const styles= {
  "--button-default-height": "100px",
  "--button-default-font-size": "18px",
  "--button-default-border-radius": "18px",
  "--button-horizontal-padding": "23px",
  "--button-raise-level": "10px",
  "--button-hover-pressure": "2.5",
  "--transform-speed": "0.35s",
  "--button-primary-color": "#ff8c00",
  "--button-primary-color-dark": "#d15400",
  "--button-primary-color-light": "#ffffff",
  "--button-primary-color-hover": "#ff6600",
  "--button-primary-color-active": "#ff6600",
  "--button-primary-border": "1px solid #330000",
  "--button-secondary-color": "#db4557",
  "--button-secondary-color-dark": "#d0b400",
  "--button-secondary-color-light": "#ffe11d",
  "--button-secondary-color-hover": "#d73044",
  "--button-secondary-color-active": "#c7263a",
  "--button-secondary-border": "1px solid #ffe11d",
  "--button-anchor-color": "#2d2d3a",
  "--button-anchor-color-dark": "#674f40",
  "--button-anchor-color-light": "#97735d",
  "--button-anchor-color-hover": "#2d2d3a",
  "--button-anchor-color-active": "#2d2d3a",
  "--button-anchor-border": "1px solid #876753",
  "--button-danger-color": "#2d2d3a",
  "--button-danger-color-dark": "#0c0c0f",
  "--button-danger-color-light": "#f1f1f4",
  "--button-danger-color-hover": "#292934",
  "--button-danger-color-active": "#22222c",
  "--button-danger-border": "none",
  "width": "100px",
}
const DrumPad: React.FC<DrumPadProps> = ({
  text,
  audio,
  name,
  handleDisplay,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.currentTime = 0;
      handleDisplay(name);
    }
  };

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === text && audioRef.current) {
        audioRef.current.play();
        audioRef.current.currentTime = 0;
        handleDisplay(name);
      }
    },
    [text, handleDisplay]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <div className="drum-pad" onClick={handleClick} id={`b-${text}`}>
      <AwesomeButton type="primary"
      style={styles}
       cssModule={AwesomeButtonStyles}
       className='drumPadBtn'
       >
        {text}
      </AwesomeButton>
      <audio src={audio} className="clip" ref={audioRef} id={text} />
    </div>
  );
};

export default DrumPad;
