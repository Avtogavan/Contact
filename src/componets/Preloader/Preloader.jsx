import React from 'react'
import s from './Preloader.module.sass'
import pic from '../../img/pic.gif'

export default function Preloader() {
  return (
    <div className={s.wrap}>
      <img src={pic} alt="" className={s.wrap__img} />
    </div>
  )
}
