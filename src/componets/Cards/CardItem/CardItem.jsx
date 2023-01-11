import React from 'react'
import Button from '../../Button/Button'
import s from './CardItem.module.sass'
import whatsapp from '../../../img/whatsapp.png'
import telegram from '../../../img/telegram.png'
import instagram from '../../../img/instagram.png'
import { NavLink } from 'react-router-dom'
import back from '../../../img/1.svg'
import Back from '../Back';

export default function CardItem({ namePerson, position, image, inst, phone}) {

    return (

        <div className={s.wrap}>
             
            
            
            <a id='RouterNavLink'  href={'tel: +' + phone} className={s.wrapBtn__tell}>
                Позвонить 
            </a>
            
            <Button btn={'s'} link={`https://api.whatsapp.com/send/?phone=${phone}`} socNet={whatsapp} title='whatsapp'/>
            <Button btn={'s'} link={`https://t.me/+${phone}`} socNet={telegram} title='telegram'/>
            <Button btn={'s'} link={`${inst}`} socNet={instagram} title='instagram'/>
        </div>
  )
}
