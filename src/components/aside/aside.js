// import './aside.css';

export default function Aside(props) {
    return (<aside id="name">
        <h1>Nichol Dimalanta</h1>
        <ul>
            <li>
                <a href="https://linkedin.com/in/nicholdimalanta" target="_blank" referrerPolicy="no-referrer" title="linkedin">
                    <i className="linkedin"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/rhizene" target="_blank" referrerPolicy="no-referrer" title="github">
                    <i className="github"></i>
                </a>
            </li>
            <li>
                <a href="https://skylightspica.newgrounds.com" target="_blank" referrerPolicy="no-referrer" title="newgrounds">
                    <i className="newgrounds"></i>
                </a>
            </li>
        </ul>
    </aside>)
}