import React, { useRef } from 'react'
import s from './Switch.module.sass'
import { CardsData } from './../CardsData';
import Carousel from '../Carousel/Carousel';
import SwitchBtn from './SwitchBtn';
import { NavLink } from 'react-router-dom';

export default function Switch({setmain, main}) {

    // console.log(main);

    const scrollNavRefs = useRef(null)

    const getElementIndex = (element) => {
      const parent = element.parentNode;
    //   console.log(parent);
      return [...parent.children].indexOf(element);
    }
  
    const scrollHandler = () => {
      if (!scrollNavRefs.current) return
      const rectNav = scrollNavRefs.current.getBoundingClientRect();
      const el = document.elementFromPoint(rectNav.width / 2, rectNav.height + 200)
    //   console.log(el)
      if(!el || el.tagName !== 'SECTION') return
      const newIndex =  getElementIndex(el)
    //   console.log(newIndex);
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
                             
                                <a href={`#${i}`} className={ main === i ? 'switch__btn__active switch__btn' : 'switch__btn'}  
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
