import React from 'react'
import Button from '../../Button/Button'
import s from './CardItem.module.sass'
import whatsapp from '../../../img/whatsapp.png'
import telegram from '../../../img/telegram.png'
import instagram from '../../../img/instagram.png'

export default function CardItem({ namePerson, position, image, inst, phone, id, main }) {

    return (

        <>
            <div className={s.wrapBtn__tell__wrap}>
                <div>
                    <img src={image} alt="" className={s.wrapBtn__tell__img}/>
                </div>
                <div className={s.wrapBtn__tell__title}>

                        {namePerson}

                    <br />

                    <span className={s.wrapBtn__tell__subtitle}>
                        {position}
                    </span>
                </div>
            </div>
            
            <a href={'tel: +' + phone} className={s.wrapBtn__tell}>
                Позвонить 
            </a>
            
            <Button link={`https://api.whatsapp.com/send/?phone=${phone}`} socNet={whatsapp} title='whatsapp'/>
            <Button link={`https://t.me/+${phone}`} socNet={telegram} title='telegram'/>
            <Button link={`${inst}`} socNet={instagram} title='instagram'/>
        </>
  )
}
