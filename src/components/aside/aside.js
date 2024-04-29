import styles from './aside.module.scss';

export default function Aside(props) {
    return (<aside id={styles.name}>
        <h1>Nichol Dimalanta</h1>
        <ul>
            <li>
                <a href="https://linkedin.com/in/nicholdimalanta" target="_blank" referrerPolicy="no-referrer" title="linkedin">
                    <i className={styles.linkedin}></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/rhizene" target="_blank" referrerPolicy="no-referrer" title="github">
                    <i className={styles.github}></i>
                </a>
            </li>
            <li>
                <a href="https://skylightspica.newgrounds.com" target="_blank" referrerPolicy="no-referrer" title="newgrounds">
                    <i className={styles.newgrounds}></i>
                </a>
            </li>
        </ul>
        {props.children}
    </aside>)
}