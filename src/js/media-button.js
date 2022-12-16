const _mediaButton = document.createElement('button');
const pauseClass = 'paused';
    _mediaButton.id = 'media-button';
    _mediaButton.innerText = '♫';
    _mediaButton.className = pauseClass;

const _audioElement = document.createElement('audio');
    _audioElement.loop = true;
    _audioElement.src = 'assets/545883_Shades-Of-James.mp3';



const toggleMediaButtonStyle = () => {
    _mediaButton.classList.toggle(pauseClass);
}

_audioElement.addEventListener('play', toggleMediaButtonStyle);
_audioElement.addEventListener('pause', toggleMediaButtonStyle)

_mediaButton.addEventListener('click', ()=> {
    _audioElement.paused ? _audioElement.play() : _audioElement.pause();
});


export const mediaButton = _mediaButton;
export const audioElement = _audioElement;
