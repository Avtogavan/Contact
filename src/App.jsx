import React from 'react';
import './style.sass'
import logo from './img/logo1.png'
import Cards from './componets/Cards/Cards';

export default function App() {
  return (
    <div className="app">
       <div className="app__inner">
          <img src={logo} alt="" className="app__inner__logo"/>
       </div>
       <div className="wrapBtn">
          <div className="wrapBtn__title">
              Наши контакты
          </div>
          <>
            <Cards /> 
         </>
      </div>
       <div className="title">ТОО &nbsp; "Автогавань"</div>
    </div>
  );
}


