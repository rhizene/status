
import styles from './projectList.module.scss';
import LightboxButton from '../lightboxButton/lightboxButton';
import { SubtitleContext } from '../subtitleList/subtitleContext';
import { useContext } from 'react';

/**
 * 
 * @param {{
 * listItems: {[key:string]:jsx}
 * }} params 
 * @returns {jsx}
 */
export default function ProjectList({listItems}) {
    const [, setSubtitle] = useContext(SubtitleContext);
    
    const details = listItems.map((listItem, index)=>{
        const {name, link, description, portfolio_images:portfolioImages} = listItem;

        const projectLink = link
            ?   <em className='text-button'>
                    <a href={link} target='_blank' referrerPolicy='no-referrer'>project link</a>
                </em>
            : null;

        const images = portfolioImages.map(({image})=>{
            return {
                src: image,
                title: name,
                description 
            };
        });
        const lightboxButton = images.length > 0
            ? <LightboxButton images={images} />
            : null;
        const onSummaryClick = (evt) => {
            evt.preventDefault();
            setSubtitle(<>
                <p> {description} </p>
                <div>
                    {projectLink}
                    {lightboxButton}
                </div>
            </>);

        }

        return <li key={index}>
            <details>
                <summary onClick={(e) => onSummaryClick(e)}>{name}</summary>
            </details>

        </li>
        });

    return (
        <ul className={styles.detailList}>
            {details}
        </ul>
    )
}
