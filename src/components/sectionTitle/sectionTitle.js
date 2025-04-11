import { useContext } from 'react';
import styles from './sectionTitle.module.scss';
import { SectionTitleContext } from './sectionTitleContext';

export default function SectionTitle(){
    const [title] = useContext(SectionTitleContext);

    return <div id={styles.sectionTitle}><h2 className={title?styles.elementToFadeInAndOut : ''}>{title}</h2></div>;
}