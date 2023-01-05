import React, { useEffect, useRef } from 'react'
import s from './Switch.module.sass'
import { CardsData } from './../CardsData';

export default function Switch({setmain, main, top}) {

    const scrollNavRefs = useRef(null)

    const getElementIndex = (element) => {
      const parent = element.parentNode;
      return [...parent.children].indexOf(element);
    }

    const scrollHandler = () => {
      if (!scrollNavRefs.current) return
      const rectNav = scrollNavRefs.current.getBoundingClientRect();
      const el = document.elementFromPoint(rectNav.width / 2, rectNav.height + 205)
      if(!el || el.tagName !== 'SECTION') return
      const newIndex =  getElementIndex(el)
      const rect = el.getBoundingClientRect();
      setmain(newIndex);
    };

    const scrollToIndex = (event) => {
        const navLi = event.target.parentNode;
        console.log(navLi);
        const index = getElementIndex(navLi);
        setmain(index)
    };

    return (

        <div className={s.slider} ref={scrollNavRefs} onScroll={scrollHandler}  >  
            <div className={s.mainCon}>
                { 
                    CardsData.map((e, i) => 
                        <section className={s.switch} key={i} id={`${i}`} >
                             
                                <a href={`#${i}`} className={ main === i ? `${s.switch__btn__active} ${s.switch__btn}` : `${s.switch__btn}`}  
                                    onClick={scrollToIndex}
                                >
                                    {e.position}
                                </a>
                           
                        </section>
                    )
                }
            </div>
        </div>  
    )
}
