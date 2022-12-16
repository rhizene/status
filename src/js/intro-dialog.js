import { audioElement } from "./media-button";


const hrElement = document.createElement('hr');
const introYes = document.createElement('button');
const introNo = document.createElement('button');
introYes.innerText = "Yes";
introNo.innerText = "No"

function closeDialog(){
    introDialog.classList.remove('open');
    setTimeout(()=>introDialog.close(), 5000);
}

introYes.addEventListener('click', ()=> {
    audioElement.play();
    closeDialog();
});
introNo.addEventListener('click', ()=> closeDialog());


const introDialog = document.createElement('dialog');
introDialog.innerText = "Music on?"
introDialog.append(hrElement, introYes, introNo);
introDialog.classList.add('open')
introDialog.showModalOriginal = introDialog.showModal;
introDialog.showModal = () => {
    introDialog.showModalOriginal();
    setTimeout(()=>introDialog.classList.add('show-modal'), 1000);
}

export default introDialog;
