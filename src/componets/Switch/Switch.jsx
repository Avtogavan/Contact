import React from 'react'
import s from './Switch.module.sass'
import { CardsData } from './../CardsData';
import { NavLink } from 'react-router-dom';

export default function Switch({main, setMain}) {

        const SwitchBtn = ({position, id}) => {
        
            return (
                <NavLink to={'./Contact/' + position} className={s.switch__link}>     
                    <div className={main === id ? `${s.switch__btn__active} ${s.switch__btn}` : `${s.switch__btn}` } 
                        onClick={()=> setMain(id)}
                    >
                        {position}
                    </div>
                </NavLink>
            )
        }

  return (
    <div className={s.switch}>
        { 
            CardsData.map( (e, i)=>
                <SwitchBtn key={i} id={e.id}  position={e.position}/>
            )
        }
    </div>
  )
}
