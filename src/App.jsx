import React, { useEffect, useRef } from 'react';
import './style.sass'
import logo from './img/logo1.png'
import Cards from './componets/Cards/Cards';

export default function App() {

   const top = useRef(null)

  
  return (

    <div className="app" ref={top}>
       <div className="app__inner">
          <img src={logo} alt="Автогавань" className="app__inner__logo"/>
       </div>
       <div className="wrapBtn">
          <div className="wrapBtn__title">
              Наши контакты
          </div>
          <>
            <Cards top={top}/> 
         </>
      </div>
       <div className="title">ТОО &nbsp; "Автогавань"</div>
    </div>

  );
}


