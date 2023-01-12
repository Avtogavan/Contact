import React from 'react'
import s from './Cards.module.sass'
import {Routes, Route} from 'react-router-dom'
import ProfileContainer from '../Profile/ProfileContainer';

export default function Cards({param, setParam}) {

    return (

        <div className={s.card}>
                <> 
                    <Routes>  
                      <Route
                        exact
                        path={`*`} 
                        element={
                          <Routes>
                            <Route path='/:id' element={
                                <ProfileContainer setParam={setParam} param={param}/>
                              }
                            />
                          </Routes>
                        }
                      />                           
                    </Routes>
                </>
        </div>
    )
}
