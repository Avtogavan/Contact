import React, { useRef } from 'react'
import s from './Switch.module.sass'
import { CardsData } from '../CardsData'
import CardItem from '../Cards/CardItem/CardItem'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import whatsapp from '../../img/whatsapp.png'
import telegram from '../../img/telegram.png'
import instagram from '../../img/instagram.png'

export default function Switch({setmain, main, top}) {

    const scrollNavRefs = useRef(null)

    const getElementIndex = (element) => {
      const parent = element.parentNode;
      return [...parent.children].indexOf(element);
    }

    const scrollHandler = () => {
      if (!scrollNavRefs.current) return
      const rectNav = scrollNavRefs.current.getBoundingClientRect();
      const el = document.elementFromPoint(rectNav.width  * 1 , rectNav.height + 50)
      console.log(el);
      if(!el || el.tagName !== 'SECTION') return
      const newIndex =  getElementIndex(el)
      const rect = el.getBoundingClientRect();
      setmain(newIndex);
    };

    const scrollToIndex = (event) => {
        const navLi = event.target.parentNode;
        const index = getElementIndex(navLi);
        setmain(index)
    };

    return (
      <BrowserRouter>
      <>
        <div className={s.slider} ref={scrollNavRefs} onScroll={scrollHandler}  >  
            <>     
            
                <>
                  
                    { 
                        CardsData.map((e, i) => 
                        
                            <section className={s.switch} key={i} id={`${i}`} >
                                
                                <a href={`#${i}`} id='Rout' className={s.switchWrap}  
                                    // onClick={scrollToIndex}
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
        <div className={s.wrap}> 
            { 
                CardsData.filter((e, i) => e.id === main).map((e, i) =>            
                     <div key={i} className={s.wrap__item}>    
                    <a id='RouterNavLink'  href={'tel: +' + e.phone} className={s.wrapBtn__tell}>
                        Позвонить 
                    </a>
                    
                    <Button link={`https://api.whatsapp.com/send/?phone=${e.phone}`} socNet={whatsapp} title='whatsapp'/>
                    <Button link={`https://t.me/+${e.phone}`} socNet={telegram} title='telegram'/>
                    <Button link={`${e.inst}`} socNet={instagram} title='instagram'/>
                 </div>
                )
          }
           </div>
        </>
      </BrowserRouter>  

    )
}
