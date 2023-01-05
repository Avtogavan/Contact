import React, { useRef } from 'react'
import s from './Switch.module.sass'
import { CardsData } from '../CardsData'
import CardItem from '../Cards/CardItem/CardItem'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'

export default function Switch({setmain, main, top}) {

    const scrollNavRefs = useRef(null)

    const getElementIndex = (element) => {
      const parent = element.parentNode;
      return [...parent.children].indexOf(element);
    }

    const scrollHandler = () => {
      if (!scrollNavRefs.current) return
      const rectNav = scrollNavRefs.current.getBoundingClientRect();
      const el = document.elementFromPoint(rectNav.width / 2, rectNav.height + 200)
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
      <BrowserRouter>
        <div className={s.slider} ref={scrollNavRefs} onScroll={scrollHandler}  >  
            <>     
            
                <>
                  
                    { 
                        CardsData.map((e, i) => 
                        
                            <section className={s.switch} key={i} id={`${i}`} >
                                
                                <a href={`#${i}`} id='Rout' className={s.switchWrap}  
                                    onClick={scrollToIndex}
                                >

                                  <span className={ main === i ? `${s.switch__btn__active} ${s.switch__btn}` : `${s.switch__btn}`}>
                                    {e.position}
                                  </span>
                                    <Routes>

                                        { 
                                          
                                          <Route
                                              key={i}
                                              path={'*'} 
                                              element={ 
                                                <CardItem 
                                                  namePerson={e.namePerson}
                                                  position={e.position}
                                                  image={e.image}
                                                  inst={e.inst}
                                                  phone={e.phone} 
                                                  id={e.id}
                                                  main={main}
                                                />                         
                                              }
                                          />
                                              
                                        }
                                    </Routes>  
                                </a>
                            </section>
                        )
                    }
                </>
              
              
            
            </> 
        </div>   
      </BrowserRouter>  
    )
}
