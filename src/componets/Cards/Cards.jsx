import React, {useState} from 'react'
import s from './Cards.module.sass'
import {CardsData} from '../CardsData'
import {Routes, Route, useParams, NavLink} from 'react-router-dom'
import Button from './../Button/Button';
import Profile from '../Profile/Profile';
import ProfileContainer from '../Profile/ProfileContainer';

export default function Cards() {

    const [param, setParam] = useState(0)

    return (

        <div className={s.card}>
            
                <> 
                    <Routes>   
                    <Route
                        
                        path={`/`} 
                        element={<NavLink to={`/0`} className={s.card__btn}>Связаться с сотрудниками</NavLink>}
                      /> 
                      <Route
                        exact
                        path={`/:id`} 
                        element={<ProfileContainer setParam={setParam} param={param}/>}
                      />
                                                      
                    </Routes>
                
            </>

    </div>

    )

}
