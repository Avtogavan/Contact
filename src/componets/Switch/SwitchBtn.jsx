import React from 'react'
import './SwitchBtn.sass'
import { NavLink } from 'react-router-dom';

export default function SwitchBtn(props) {

    const scrollToIndex = (event) => {
        const navLi = event.target.parentNode;
        const index = props.getElementIndex(navLi);
        props.setmain(index)
    };

  return (
        <NavLink to={'/'} className='switch__link' >     
            <div className={ props.main === props.i ? 'switch__btn__active switch__btn' : 'switch__btn'}  
                onClick={scrollToIndex}
            >
                {props.position}
            </div>
        </NavLink>
  )
}
