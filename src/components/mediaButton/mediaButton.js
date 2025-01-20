import { useEffect, useState } from 'react';

export const mediaButtonState = {
  PAUSED: 'media-button paused',
  PLAY: 'media-button',
};
let buttonClass = mediaButtonState.PAUSED;
let setButtonClass = () => {};
const audio = new Audio();

const pauseAudio = () => {
  audio.pause();
  setButtonClass(mediaButtonState.PAUSED);
};

export const playAudio = () => {
  audio.play();
  setButtonClass(mediaButtonState.PLAY);
};

export default function MediaButton({bgm}) {
  useEffect(()=>{
    audio.src = bgm;
  }, [bgm]);
  
  [buttonClass, setButtonClass] = useState(mediaButtonState.PAUSED);

  const handleClick = () => {
    if (audio.paused) {
      playAudio();
    } else {
      pauseAudio();
    }
  };

  return (
    <button id="media-button" className={buttonClass} onClick={handleClick}>
      ♫
    </button>
  );
}
