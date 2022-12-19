import { audioElement } from "./media-button";


const buttonContainer = document.createElement('div');
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
buttonContainer.append(introYes, introNo);
introDialog.append(buttonContainer);
introDialog.classList.add('open')
introDialog.showModalOriginal = introDialog.showModal;
introDialog.showModal = () => {
    introDialog.showModalOriginal();
    setTimeout(()=>introDialog.classList.add('show-modal'), 1000);
}

export default introDialog;
