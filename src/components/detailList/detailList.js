import styles from './detailList.module.scss';
/**
 * 
 * @param {{
 * listItems: {[key:string]:jsx}
 * }} params 
 * @returns {jsx}
 */
export default function DetailList({listItems}) {
    const details = Object.keys(listItems).map(summary=>
        <li>
            <details>
                <summary>{summary}</summary>
                {listItems[summary]}
            </details>

        </li>
        );

    return (
        <ul className={styles.detailList}>
            {details}
        </ul>
    )
}
