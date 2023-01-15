import profile from '../../img/profile.png'
import s from './SlideItem.module.sass'

export default function SlideItem(props) {
  
  return (
    <div 
      // onClick={()=> props.setParam(props.id)}
      className={props.id == props.param ?  
        `${s.wrapBtn__tell__wrap} ${s.wrapBtn__tell__wrap__active}` 
        :
          `${s.wrapBtn__tell__wrap}`
      } 
    >
        <div>
            <img src={props.image !== '' ? props.image : profile } alt="" className={s.wrapBtn__tell__img}/>
        </div>
        <div className={s.wrapBtn__tell__title}>

                {props.namePerson}

            <br />

            <span className={s.wrapBtn__tell__subtitle}>
                {props.position}
            </span>
        </div>
    </div>
  )
}
