import { Interweave } from 'interweave';
import styles from './detailList.module.scss';
/**
 * @depracated for SubtitleList
 */
export default function DetailList({listItems}) {
    const details = Object.keys(listItems).map((summary, index)=>
        <li key={index}>
            <details>
                <summary>{summary}</summary>
                <Interweave content={listItems[summary]}></Interweave>
            </details>

        </li>
        );

    return (
        <ul className={styles.detailList}>
            {details}
        </ul>
    )
}
