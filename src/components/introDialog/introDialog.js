import { useEffect, useRef } from 'react';
import { playAudio } from '../mediaButton/mediaButton';

let introDialogRef;
const CLASS_OPEN = 'open';

const getIntroDialog = () => introDialogRef.current;

const onClickYes = () => {
  playAudio();
  closeDialog();
};

const closeDialog = () => {
    getIntroDialog().classList.remove(CLASS_OPEN);
    setTimeout(() => getIntroDialog().close(), 5000);
  };

const showModal = () => {
    const dialogRef = getIntroDialog();
    dialogRef.showModalOriginal();
    setTimeout(() => dialogRef.classList.add('show-modal'), 1000);
};

export default function IntroDialog() {
    introDialogRef = useRef(null);
    
    useEffect(()=>{
        getIntroDialog().showModalOriginal = getIntroDialog().showModal
        showModal();
    }, [introDialogRef]);

  return (
    <dialog ref={introDialogRef} className={CLASS_OPEN}>
      Music on?
      <div>
        <button onClick={onClickYes}>Yes</button>
        <button onClick={closeDialog}>No</button>
      </div>
    </dialog>
  );
}
