
import styles from './projectList.module.scss';
import LightboxButton from '../lightboxButton/lightboxButton';

/**
 * 
 * @param {{
 * listItems: {[key:string]:jsx}
 * }} params 
 * @returns {jsx}
 */
export default function ProjectList({listItems}) {
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

        return <li key={index}>
            <details>
                <summary>{name}</summary>
                <span> {description} </span>
                <div>
                    {projectLink}
                    {lightboxButton}
                </div>
            </details>

        </li>
        });

    return (
        <ul className={styles.detailList}>
            {details}
        </ul>
    )
}
