import React, {useState} from 'react'
import s from './Cards.module.sass'
import {CardsData} from '../CardsData'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Button from './../Button/Button';
import Search from '../Search/Search'
import  {withRouter}  from '../withRouter/withRouter';
import Profile from '../Profile/Profile';

const ParamQ = withRouter(Profile)


export default function Cards() {

    const [search, setSearch] = useState('')

    return (

        <div className={s.card}>
            
            <BrowserRouter>
                <> <div className={s.slider}>
                    <Routes>
                        <Route
                          path={'/Contact'}
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

                                          <Button link={e.id} title={e.position}/>

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
                              exact
                              path={'/Contact/:id' } 
                              element={ 
                                <div className={s.card__width} key={i}> 
                                
                                <ParamQ 
                                  
                                >
                                    <Profile namePerson={e.namePerson} 
                                    position={e.position} 
                                    image={e.image} 
                                    inst={e.inst} 
                                    phone={e.phone}/>
                                </ParamQ>
                                  
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
