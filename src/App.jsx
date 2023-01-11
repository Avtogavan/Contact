import React, {useEffect} from 'react';
import './style.sass'
import logo from './img/logo1.png'
import Cards from './componets/Cards/Cards';
import { useLocation, useNavigate, useParams} from 'react-router-dom';

export default function App(props) {
   let navigate = useNavigate()  
   let param = useLocation()
   useEffect(()=> {
       if (param.pathname == '/') {
         navigate(`/0`, {replace: true})
       }
       
   }, [ param])
  return (

    <div className="app" >
       <div className="app__inner">
          <img src={logo} alt="Автогавань" className="app__inner__logo"/>
       </div>
       <div className="wrapBtn">
          <div className="wrapBtn__title">
              Наши контакты
          </div>
       
         <Cards/> 
            
      </div>
       <div className="title">ТОО &nbsp; "Автогавань"</div>
    </div>

  );
}


