import React, { useState } from 'react'
import { CardsData } from '../CardsData'
import CardItem from './CardItem/CardItem'
import s from './Cards.module.sass'
import Switch from '../Switch/Switch'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default function Cards() {

  const [main, setMain] = useState('1')

return (
    <>        
       <BrowserRouter>
            <Routes>
          <>
                {
                  CardsData.filter((e)=> e.id === main ).map((e, i) => 
                      <Route
                        key={i}
                        path={'/*'} 
                        element={
                          <>
                            <Switch  setMain={setMain} main={main}/>
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
        </BrowserRouter>

    </>
  )

}
