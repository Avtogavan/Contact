import React, {useState} from 'react'
import s from './Cards.module.sass'
import Switch from '../Switch/Switch'
import {CardsData} from '../CardsData'
import CardItem from '../Cards/CardItem/CardItem'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom'
import Button from './../Button/Button';
import Back from './Back';
import Search from '../Search/Search'

export default function Cards() {

    const [search, setSearch] = useState('')

    return (

        <div className={s.card}>
            
            <BrowserRouter>
                <> <div className={s.slider}>
                    <Routes>
                        <Route
                          path={'/'}
                          element={
                            <>

                              <Search setSearch={setSearch} search={search}/>

                              <div className={s.card__width}>
                                
                                {  CardsData.filter((val) => {
                
                                    if (search === '') return val
                                  
                                      else if (
                                          val.position.toLowerCase().includes(search.toLowerCase()) 
                                      ) return val
          
                                    }).map(
                                      (e, i) => 

                                      <div className={s.card__wrapBtn} key={i}>

                                          <Button link={e.position} title={e.position}/>

                                      </div>
                                      
                                  )
                              
                                }
                              </div>
                            </>    
                          }
                        />
                        <>
                          { 
                            CardsData.map((e, i) => 
                          
                            <Route
                              key={i}
                              path={`/${e.position}`} 
                              element={ 
                                <div className={s.card__width}> 
                                 <NavLink className={s.card__back} to={'/'}>
                                    <Back/>

                                      &nbsp; 

                                    <div style={{marginBottom: ' 7px'}}> 
                                        На главную 
                                    </div>
                                  </NavLink>
                               
                                  <CardItem 
                                    key={i}
                                    namePerson={e.namePerson} 
                                    position={e.position} 
                                    image={e.image} 
                                    inst={e.inst} 
                                    phone={e.phone}
                                  />
                                  
                                </div> 
                              }
                            />
                            )
                          }
                        </>
                    </Routes>
                </div>
            </>
        </BrowserRouter>

    </div>

    )

}
