import React, { useRef, useState } from 'react'
import { CardsData } from '../CardsData'
import CardItem from './CardItem/CardItem'
import s from './Cards.module.sass'
import Switch from '../Switch/Switch'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BtnNav from '../BtnNav/BtnNav'
import Carousel from '../Carousel/Carousel'

export default function Cards() {

  const [main, setmain] = useState('1')  

return (
    <>        
       <BrowserRouter>
       <div className={s.cards}>
          <div className={s.card__wrap} > 
            <Routes>
          <>
                {
                  CardsData.filter((e)=> e.id === main ).map((e, i) => 
                      <Route
                        key={i}
                        path={'*'} 
                        element={
                            <> 
                                 <div className={s.card__wrap__slider} >
                                  <Carousel id={e.id} main={main}  setmain={setmain}>
                                    <Switch />
                                  </Carousel>
                                  {/* <div className={s.card__wrap__slider__wrapBtn}>
                                      <button disabled={prev} onClick={prevHandler} className={`${s.card__wrap__slider__btn} ${s.card__wrap__slider__btn__left}`}>
                                          <BtnNav navig='f'/>
                                      </button>
                                    
                                      <button  onClick={nextHandler} disabled={next} className={`${s.card__wrap__slider__btn} ${s.card__wrap__slider__btn__right}`}>
                                          <BtnNav/>
                                      </button>
                                  </div> */}
                             
                             </div>
                                <CardItem 
                                  namePerson={e.namePerson}
                                  position={e.position}
                                  image={e.image}
                                  inst={e.inst}
                                  phone={e.phone} 
                                  id={e.id}
                                  main={main}
                                />                         
                            </>
                        }
                      />
                    )
                }

         
          </>     
        </Routes>
        </div>
              </div>
        </BrowserRouter>

    </>
  )

}
