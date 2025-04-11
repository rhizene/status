import { useEffect, useRef, useState } from 'react';
import { mediaButtonState, playAudio } from '../mediaButton/mediaButton';

let introDialogRef;
const CLASS_OPEN = 'delayed-show';
const CLASS_BODY_HIDE = 'disappear';
const CLASS_DIALOG_FADE = 'fade-out';

const getIntroDialog = () => introDialogRef.current;

const closeDialog = () => {
  getIntroDialog().classList.remove(CLASS_OPEN);
  getIntroDialog().classList.add(CLASS_DIALOG_FADE);
  document.body.classList.remove(CLASS_BODY_HIDE);  
  getIntroDialog().close();
  };

const showModal = () => {
    const dialogRef = getIntroDialog();
    dialogRef.showModalOriginal();
};

const checkBgmState = (state, condition) => {
  return (state !== null && state !== condition)
    ? 'hide' : '';
};

const isBgmOn = (state) => {
  return checkBgmState(state, true);
}

const isBgmOff = (state) => {
  return checkBgmState(state, false);
}

export default function IntroDialog() {
    introDialogRef = useRef(null);
    const [state, setState] = useState({
      isBgmSelected: null
    });
    const onClickYes = () => {
      setState({...state, isBgmSelected: true });
      playAudio();
      closeDialog();
    };

    const onClickNo = () => {
      setState({...state, isBgmSelected: false });
      closeDialog()
    };

    useEffect(()=>{
        getIntroDialog().showModalOriginal = getIntroDialog().showModal;
        showModal();
        setTimeout(getIntroDialog().classList.add(CLASS_OPEN), 1000)
        document.body.classList.add(CLASS_BODY_HIDE);
    }, [introDialogRef]);

  return (
    <dialog ref={introDialogRef}>
      Music on?
      <div>
        <div className={isBgmOn(state.isBgmSelected)} onClick={onClickYes}>
          <button className={mediaButtonState.PLAY}>
            ♫
          </button>
          <span>Yes</span>
        </div>
        <div className={isBgmOff(state.isBgmSelected)} onClick={onClickNo}>
          <button className={mediaButtonState.PAUSED}>
            ♫  
          </button>
          <span>No</span>
        </div>
      </div>
    </dialog>
  );
}
