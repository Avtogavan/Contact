import React, { useState } from 'react'
import { CardsData } from '../CardsData'
import CardItem from './CardItem/CardItem'
import s from './Cards.module.sass'
import Switch from '../Switch/Switch'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BtnNav from '../BtnNav/BtnNav'
import Carousel from '../Carousel/Carousel'

export default function Cards() {

  const [main, setmain] = useState('1')  

  const [offset, setOffset] = useState('1')  

  const [pages, setPages] = useState([])

  const onLeftClick = () => {
    setOffset((currentOffset)=> {
      const newOffset = currentOffset + 185
      return Math.min(newOffset, 0)
    })
  }

  const onRightClick = () => {
      setOffset((currentOffset)=> {
        const newOffset = currentOffset - 185
        const maxOffset = -(185 * (pages.length + 3))
        return Math.max(newOffset, maxOffset)
      })
  }


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
                              <div className={s.card__wrap__slider__wrapBtn}>
                                      <button onClick={onLeftClick} className={`${s.card__wrap__slider__btn} ${s.card__wrap__slider__btn__left}`}>
                                          <BtnNav navig='f'/>
                                      </button>
                                    
                                      <button onClick={onRightClick} className={`${s.card__wrap__slider__btn} ${s.card__wrap__slider__btn__right}`}>
                                          <BtnNav/>
                                      </button>
                                  </div>
                             
                                <div className={s.card__wrap__slider} >
                                  <Carousel id={e.id} main={main} pages={pages} setPages={setPages} setmain={setmain} offset={offset} setOffset={setOffset}>
                                    <Switch />
                                  </Carousel>
                                
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
