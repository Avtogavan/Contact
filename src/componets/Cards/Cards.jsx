import React, { useState } from 'react'
import s from './Cards.module.sass'
import Switch from '../Switch/Switch'

export default function Cards({top}) {

  const [main, setmain] = useState(0)  

return (
      
     
        <div className={s.card} >
          <div className={s.card__wrap}> 
          
              <Switch 
                  top={top}
                  setmain={setmain}  
                  main={main}
              />
 
          </div>
        </div>
   

  )

}
