import React from 'react'
import s from './Button.module.sass'
import { NavLink } from 'react-router-dom';

export default function Button({link, socNet, title, btn}) {

  return (
    <>
      {
       btn !== undefined ?
        
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
        : 
        <>
          <NavLink to={`/Contact/${link}`} className={s.wrapBtn__btn}>
            <div className={s.wrapBtn__btn__inner}>
                <div className={s.wrapBtn__btn__title} style={{marginLeft:'0'}}>{title}</div>
            </div>
          </NavLink>
        </>
      }
    </>
  )
}
