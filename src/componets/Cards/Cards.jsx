import React, {useState} from 'react'
import s from './Cards.module.sass'
import {CardsData} from '../CardsData'
import {Routes, Route, useParams} from 'react-router-dom'
import Button from './../Button/Button';
import Search from '../Search/Search'
import Profile from '../Profile/Profile';
import ProfileContainer from '../Profile/ProfileContainer';

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
                                
                                 <ProfileContainer param={param}/>}
                            />
                            
                          

                        </>
                    </Routes>
                </div>
            </>

    </div>

    )

}
