import React, { useRef, useState } from 'react'
import { CardsData } from '../CardsData'
import CardItem from './CardItem/CardItem'
import s from './Cards.module.sass'
import Switch from '../Switch/Switch'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BtnNav from '../BtnNav/BtnNav'

export default function Cards() {

  const [main, setMain] = useState('1')

  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  const slider = useRef(null)

  let position = 0

//   const prevHandler = () => {
//     if (position === 0) {
      
//     } else {
//       position += 100
//       setPrev(false)
//       slider.current.childNodes.forEach((e)=> {
//         e.style = `transform: translateX(${position}px)`
//       })
//     }
// }
//   const nextHandler = () => {
//       if (position === - (CardsData.length - 3) * 110 + 100) {
//         setNext(true)
//         setPrev(false)
//       } else {
//        setPrev(true)
//         position -= 100
//         slider.current.childNodes.forEach((e)=> {
//           e.style = `transform: translateX(${position}px)`
//         })
//       }
//   }

return (
    <>        
       <BrowserRouter>
       <div className={s.cards}>
          <div className={s.card__wrap}> 
            <Routes>
          <>
                {
                  CardsData.filter((e)=> e.id === main ).map((e, i) => 
                      <Route
                        key={i}
                        path={'*'} 
                        element={
                            <>
                                <div className={s.card__wrap__slider}>
                                  <div ref={slider}><Switch main={main} setMain={setMain} /></div>
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
