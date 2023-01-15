import {useEffect, useState} from 'react';
import './style.sass'
import logo from './img/logo1.png'
import shareIt from './img/share.png'
import Cards from './componets/Cards/Cards';
import { useLocation, useNavigate } from 'react-router-dom';
import Preloader from './componets/Preloader/Preloader';

export default function App() {

   const [param, setParam] = useState(0)

   let navigate = useNavigate()  
   let {pathname} = useLocation()

   useEffect(()=> {
       if ( pathname == '/') {
         setTimeout(()=> navigate(`/${param}`, {replace: true}), 3500)       
      }
       
   }, [pathname])

   const urlBase = `https://avtogavan.github.io/Contact/#/${param}`

      function share() {
         if (navigator.share) {
            navigator.share({
               url: urlBase
            })
         }
      }
   

  return (

   <div className="app" >

      {  
         pathname !== '/' ?
            <>
               <div className="app__inner animeLogo">
                  <img src={logo} alt="Автогавань" className="app__inner__logo"/>
               </div>
               <div className="wrapBtn">
                  <div className="wrapBtn__title">
                  <>Наши контакты</>
                  </div>
                  
                  <div className='anime'> 
                     <img onClick={share} src={shareIt} alt="" className="wrapBtn__share" />  
                     <Cards param={param} setParam={setParam}/> 
                  </div>
                     
               </div>
               <div className="title">ТОО &nbsp; "Автогавань"</div>
            </>
         
         :  
            <Preloader/>
      }
   </div>
  );
}


