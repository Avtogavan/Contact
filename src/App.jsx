import {useEffect, useState} from 'react';
import './style.sass'
import logo from './img/logo1.png'
import share from './img/share.png'
import Cards from './componets/Cards/Cards';
import { useLocation, useNavigate } from 'react-router-dom';
import Preloader from './componets/Preloader/Preloader';
import Popup from 'reactjs-popup';
import whatsapp from './img/whatsapp.png'
import telegram from './img/telegram.png'
import instagram from './img/instagram.png'
import Button from './componets/Button/Button';
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
               <Popup trigger={<img src={share} alt="" className="wrapBtn__share" />} position="bottom center">
                  <div className='wrapBtn__share__popup'>

                  <Button 
                     btn={'s'} 
                     link={`https://api.whatsapp.com/send/?text=${urlBase}`} 
                     socNet={whatsapp} title=''
                  />
                  <Button 
                     btn={'s'} 
                     link={`https://aphttps://t.me/send/?text=${urlBase}`} 
                     socNet={telegram} title=''
                  />
                  
      
                  </div>
               </Popup>
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


