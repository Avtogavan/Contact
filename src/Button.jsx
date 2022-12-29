import React from 'react'

export default function Button({link, socNet, title}) {
  return (
    <>
        <a href={link} target='_blank' className="wrapBtn__btn">
            <div className="wrapBtn__btn__inner">
                <div>
                    <img className="wrapBtn__btn__img" src={socNet} alt="" />
                </div>
                <div className='wrapBtn__btn__title'>{title}</div>
            </div>
        </a>
    </>
  )
}
