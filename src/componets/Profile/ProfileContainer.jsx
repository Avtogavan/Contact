import React, { useEffect } from 'react'
import { CardsData } from '../CardsData'
import Profile from './Profile'
import s from '../Cards/Cards.module.sass'
import { useParams } from 'react-router-dom'

export default function ProfileContainer({param}) {

    let uId = useParams()
//     // console.log(uId.id);
// useEffect(()=> {
//   let userId = uId.id
//         if (!userId) {
//             userId = param        
//         }
//     //  props.setParam(uId.id)
// })    
  return (
    <>
      { CardsData.filter(e=> uId.id !== undefined ? e.id == uId.id : e.id === param).map((e, i) => 
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
    </>
  )
}
