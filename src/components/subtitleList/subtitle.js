
import { useContext, useEffect } from "react";
import { SubtitleContext } from "./subtitleContext";
import styles from './subtitle.module.scss';
import { Interweave } from "interweave";

let timeoutID = null;
export default function Subtitle() {
    const [subtitle, setSubtitle] = useContext(SubtitleContext);

    useEffect(()=>{
        if(subtitle === '') return;

        if(timeoutID !== null) {
            clearTimeout(timeoutID);
            timeoutID = null;
        }
        timeoutID = setTimeout(()=>{
            setSubtitle('');
        }, 5000);
    }, [subtitle]);
    return (
        <div className={[styles.subtitle, subtitle ? styles.show : ''].join(' ')}>
            <Interweave content={subtitle}></Interweave>
        </div>
    )
}