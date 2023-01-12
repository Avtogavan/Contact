import React, {useEffect, useState} from 'react';
import './style.sass'
import logo from './img/logo1.png'
import Cards from './componets/Cards/Cards';
import { useLocation, useNavigate, useParams} from 'react-router-dom';
import Preloader from './componets/Preloader/Preloader';

export default function App() {

   const [param, setParam] = useState(0)

   let navigate = useNavigate()  
   let {pathname} = useLocation()

   useEffect(()=> {
       if ( pathname == '/') {
         setTimeout(()=> navigate(`/${param}`, {replace: true}), 2000)       
      }
       
   }, [pathname])

  return (

   <div className="app" >

   {  
      pathname !== '/' ?
         <>
            <div className="app__inner anime">
               <img src={logo} alt="Автогавань" className="app__inner__logo"/>
            </div>
            <div className="wrapBtn anime">
               <div className="wrapBtn__title">
                  Наши контакты
               </div>
            
               <Cards param={param} setParam={setParam}/> 
                  
            </div>
            <div className="title anime">ТОО &nbsp; "Автогавань"</div>
         </>
      
      :  
         <Preloader/>
      }
   </div>
  );
}


