import React from 'react'
import Button from '../../Button/Button'
import s from './CardItem.module.sass'
import whatsapp from '../../../img/whatsapp.png'
import telegram from '../../../img/telegram.png'
import instagram from '../../../img/instagram.png'

export default function CardItem({phone}) {

    return (

        <div className={s.wrap}>
            
            <a id='RouterNavLink'  href={'tel: +' + phone} className={s.wrapBtn__tell}>
                Позвонить 
            </a>
            
            <Button btn={'s'} link={`https://api.whatsapp.com/send/?phone=${phone}`} socNet={whatsapp} title='whatsapp'/>
            <Button btn={'s'} link={`https://t.me/+${phone}`} socNet={telegram} title='telegram'/>
            <Button btn={'s'} link={`https://instagram.com/avto.gavan.pvl?igshid=YWJhMjlhZTc=`} socNet={instagram} title='instagram'/>
        </div>
  )
}
