import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { SectionTitleContext } from '../sectionTitle/sectionTitleContext';
import styles from './section.module.scss';


export default function Section(props) {
    const [sectionTitle, setSectionTitle] = useContext(SectionTitleContext);
    const sectionRef = useRef(null);
    const isInView = useIsInViewport(sectionRef);
    
    useEffect(()=>{
        if(!sectionRef.current) return;

        if (!isInView) {
            return setSectionTitle('');
        }
        if (isInView && sectionTitle !== props.title) {
            return setSectionTitle(props.title);
        }
    }, [isInView])


    const description = props.description
        ?  <p> {props.description} </p>
        : null;

    return (
        <section ref={sectionRef} className={props.isWide ? styles['screen-wide'] : ''}>
            <h2>{props.title}</h2>
            {description}
            {props.children}
        </section>
    )
}

// https://bobbyhadz.com/blog/react-check-if-element-in-viewport
function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observerConfig = {rootMargin: '-70% 0% -30% 0%', threshold: '0'};
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>{
          return setIsIntersecting(entry.isIntersecting);
        }, observerConfig),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }