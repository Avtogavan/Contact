import React from 'react'
import s from './Button.module.sass'

export default function Button({link, socNet, title}) {
  return (
    <>
        <a href={link} target='_blank' className={s.wrapBtn__btn}>
            <div className={s.wrapBtn__btn__inner}>
                <div>
                    <img className={s.wrapBtn__btn__img} src={socNet} alt="" />
                </div>
                <div className={s.wrapBtn__btn__title}>{title}</div>
            </div>
        </a>
    </>
  )
}
