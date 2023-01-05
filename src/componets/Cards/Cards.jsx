import React, { useState } from 'react'
import { CardsData } from '../CardsData'
import CardItem from './CardItem/CardItem'
import s from './Cards.module.sass'
import Switch from '../Switch/Switch'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default function Cards({top}) {

  const [main, setmain] = useState(0)  

return (
      
      <BrowserRouter>
        <div className={s.card} >
          <div className={s.card__wrap}> 
          
              <Switch 
                  top={top}
                  setmain={setmain}  
                  main={main}
              />

            <Routes>
              <> 
                { 
                  CardsData.filter((e)=> e.id === main ).map((e, i) => 
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
                    )
                }

         
              </>     
            </Routes>
          </div>
        </div>
      </BrowserRouter>

  )

}
