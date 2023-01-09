import React, {useState} from 'react'
import s from './Cards.module.sass'
import {CardsData} from '../CardsData'
import {Routes, Route} from 'react-router-dom'
import Button from './../Button/Button';
import Search from '../Search/Search'
import Profile from '../Profile/Profile';

export default function Cards() {

    const [search, setSearch] = useState('')

    const [param, setParam] = useState(0)

    return (

        <div className={s.card}>
            
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

                                          <Button 
                                            setParam={setParam}
                                            id={e.id} 
                                            title={e.position}
                                          />

                                      </div>
                                      
                                  )
                              
                                }
                              </div>
                            </>    
                          }
                        />
                        <>
                        
                          
                          
                            <Route
                            
                              exact
                              path={`/:id`} 
                              element={ 
                                
                                  CardsData.filter(e=> e.id === param).map((e, i) => 
                                <div className={s.card__width} key={i}> 
                                
                              
                                    <Profile 
                                    
                                     namePerson={e.namePerson} 
                                     position={e.position} 
                                     image={e.image} 
                                     inst={e.inst} 
                                     phone={e.phone}
                                    />
                                  
                                </div> 
                              )}
                            />
                            
                          

                        </>
                    </Routes>
                </div>
            </>

    </div>

    )

}
