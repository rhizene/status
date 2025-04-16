import { useContext } from 'react';
import styles from './subtitleList.module.scss';
import { SubtitleContext } from './subtitleContext';

/**
 * 
 * @param {{
 * listItems: {[key:string]:jsx}
 * }} params 
 * @returns {jsx}
 */
export default function SubtitleList({listItems}) {
    const [, setSubtitle] = useContext(SubtitleContext);
    const handleClick = (message) =>{
        setSubtitle(message);
    };

    const details = Object.keys(listItems).map((summary, index)=>
        <div key={index}>
                <h2 className={styles.glitch} onClick={()=>handleClick(listItems[summary])}>
                    <span className={styles.line}> {summary} </span>
                    <span className={styles.line}> {summary} </span>
                    <span className={styles.line}> {summary} </span>
                    <span className={styles.line}> {summary} </span>
                    <span className={styles.line}> {summary} </span>
                    <span className={styles.line}> {summary} </span>
                    <span className={styles.line}> {summary} </span>
                    <span className={styles.line}> {summary} </span>
                    <span className={styles.line}> {summary} </span>
                </h2>
        </div>
        );

    return (
        <div className={styles.list}>
            {details}
        </div>
    )
}
