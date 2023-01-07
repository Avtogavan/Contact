import React, { useRef } from 'react'
import s from './Switch.module.sass'
import { CardsData } from '../CardsData'
import CardItem from '../Cards/CardItem/CardItem'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import whatsapp from '../../img/whatsapp.png'
import telegram from '../../img/telegram.png'
import instagram from '../../img/instagram.png'

export default function Switch({setmain, main}) {

    return (
    <>
      {/* <div className={s.switchWrap}>

          <span className={s.switch__btn}>
            {e.position}
          </span>

              { 
                <CardItem 
                  namePerson={e.namePerson}
                  position={e.position}
                  image={e.image}
                  inst={e.inst}
                  phone={e.phone} 
                  id={e.id}
                  main={main}
                />                         
              }
                
        </div> */}
    </>

    )
}
