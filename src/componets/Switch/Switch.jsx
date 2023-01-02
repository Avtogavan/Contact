import React from 'react'
import s from './Switch.module.sass'
import { CardsData } from './../CardsData';
import Carousel from '../Carousel/Carousel';
import SwitchBtn from './SwitchBtn';
import { NavLink } from 'react-router-dom';

export default function Switch(props) {

    return (
   
    <>
    { CardsData.map((e, i) => 
            <div className={s.switch} key={i} style={props.style}>
                <SwitchBtn id={e.id} activebtn={props.activebtn} setarr={props.setarr} main={props.main} setmain={props.setmain} position={e.position}/>
            </div>
        )
    }
    </>
    
  )
}
