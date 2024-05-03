import { useEffect, useState } from 'react';
import styles from './aside.module.scss';
import { fetchLinks } from '../../services/links.service';

function listTemplate({ link, name, icon }, templateIndex) {
  return (
    <li key={templateIndex}>
      <a href={link} target="_blank" referrerPolicy="no-referrer" title={name}>
        <i style={{ backgroundImage: `url(${icon})` }}></i>
      </a>
    </li>
  );
}

export default function Aside(props) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchLinks();
      setLinks(response.map((linkData, index) => listTemplate(linkData, index)));
    })();

  }, []);

  return (
    <aside id={styles.name}>
      <h1>Nichol Dimalanta</h1>
      <ul>{links}</ul>
      {props.children}
    </aside>
  );
}
