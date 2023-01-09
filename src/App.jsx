import React from 'react';
import './style.sass'
import logo from './img/logo1.png'
import Cards from './componets/Cards/Cards';
import {  HashRouter as Router} from 'react-router-dom';

export default function App(props) {

  return (

    <div className="app" >
       <div className="app__inner">
          <img src={logo} alt="Автогавань" className="app__inner__logo"/>
       </div>
       <div className="wrapBtn">
          <div className="wrapBtn__title">
              Наши контакты
          </div>
         <Router>  
         <Cards/> 
         </Router> 
            
      </div>
       <div className="title">ТОО &nbsp; "Автогавань"</div>
    </div>

  );
}


