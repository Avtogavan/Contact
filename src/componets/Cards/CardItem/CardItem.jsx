import React from 'react'
import Button from '../../Button/Button'
import s from './CardItem.module.sass'
import whatsapp from '../../../img/whatsapp.png'
import telegram from '../../../img/telegram.png'
import instagram from '../../../img/instagram.png'
import profile from '../../../img/profile.png'
import { NavLink } from 'react-router-dom'
import back from '../../../img/1.svg'
import Back from '../Back';

export default function CardItem({ namePerson, position, image, inst, phone}) {

    return (

        <div className={s.wrap}>
             
            <div className={s.wrapBtn__tell__wrap}>
                <div>
                    <img src={image !== '' ? image : profile } alt="" className={s.wrapBtn__tell__img}/>
                </div>
                <div className={s.wrapBtn__tell__title}>

                        {namePerson}

                    <br />

                    <span className={s.wrapBtn__tell__subtitle}>
                        {position}
                    </span>
                </div>
            </div>
            
            <a id='RouterNavLink'  href={'tel: +' + phone} className={s.wrapBtn__tell}>
                Позвонить 
            </a>
            
            <Button btn={'s'} link={`https://api.whatsapp.com/send/?phone=${phone}`} socNet={whatsapp} title='whatsapp'/>
            <Button btn={'s'} link={`https://t.me/+${phone}`} socNet={telegram} title='telegram'/>
            <Button btn={'s'} link={`${inst}`} socNet={instagram} title='instagram'/>
        </div>
  )
}
