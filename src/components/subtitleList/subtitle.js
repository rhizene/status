
import { useContext, useEffect } from "react";
import { SubtitleContext } from "./subtitleContext";
import styles from './subtitle.module.scss';
import { Interweave } from "interweave";

let timeoutID = null;
export default function Subtitle() {
    const [subtitle, setSubtitle] = useContext(SubtitleContext);

    useEffect(()=>{
        if(subtitle === '') return;

        if(timeoutID !== null) {;
            resetAutohide();
        }
        timeoutID = setTimeout(()=>{
            removeSubtitle();
        }, 5000);
    }, [subtitle]);

    const resetAutohide = () => {
        clearTimeout(timeoutID);
        timeoutID = null
    };

    const removeSubtitle = (evt) => {
        if(evt && evt.type !== 'click') {
            evt.preventDefault();
        };

        setSubtitle('');
    }
    return (
        <div className={[styles.subtitle, subtitle ? styles.show : ''].join(' ')}
            onMouseEnter={()=>resetAutohide()}
            onMouseLeave={(e)=>removeSubtitle(e)}
            >
            {
                typeof subtitle === 'string'
                    ? <Interweave content={subtitle}></Interweave> 
                    : subtitle
            }
        </div>
    )
}