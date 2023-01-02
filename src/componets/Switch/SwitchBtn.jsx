import React from 'react'
import './SwitchBtn.sass'
import { NavLink } from 'react-router-dom';

export default function SwitchBtn(props) {

  return (
        <NavLink to={'./Contact/' } className='switch__link' style={props.style}>     
            <div className={'switch__btn'}  
                style={props.main === props.id ? props.activebtn : undefined}
                onClick={()=> props.setmain(props.id)}
            >
                {props.position}
            </div>
        </NavLink>
  )
}
