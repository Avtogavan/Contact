import React from 'react'
import s from './Button.module.sass'
import { Link } from 'react-router-dom';

export default function Button({link, id, setParam, socNet, title, btn}) {

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
          <Link onClick={()=> setParam(id)} to={`/${id}`} className={s.wrapBtn__btn}>
            <div className={s.wrapBtn__btn__inner}>
                <div className={s.wrapBtn__btn__title} style={{marginLeft:'0'}}>{title}</div>
            </div>
          </Link>
        </>
      }
    </>
  )
}
