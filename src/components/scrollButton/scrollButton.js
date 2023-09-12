import { unlockRoot } from '../..';
import styles from './scrollButton.module.scss';

export default function ScrollButton(){
    const handleClick = ()=>{
        unlockRoot()
        const firstSubheader = document.getElementsByTagName('h2')[0];
        firstSubheader.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
        });
    };
    return <div id={styles.scrollButton} className='mobile-only' onClick={handleClick}>▼</div>
}
