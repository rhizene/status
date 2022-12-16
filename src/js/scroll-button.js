const scrollButton = document.createElement('div');
    scrollButton.classList.add('mobile-only');
    scrollButton.id = 'scroll-button';
    scrollButton.innerText = '▼';
    
    const firstSubheader = document.getElementsByTagName('h2')[0];
    scrollButton.addEventListener('click', ()=>{
        firstSubheader.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
        });
    });

export default scrollButton;
