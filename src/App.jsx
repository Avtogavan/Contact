import React from "react";
import './style.sass'
import logo from './img/logo1.png'
import whatsapp from './img/whatsapp.png'
import telegram from './img/telegram.png'
import instagram from './img/instagram.png'
import f from './img/f.jpg'
import Button from "./Button";

export default function App() {
  return (
    <div className="app">
       <div className="app__inner">
          <img src={logo} alt="" className="app__inner__logo"/>
       </div>
       <div className="wrapBtn">
          <div className="wrapBtn__title">Наши контакты</div>
              <div className="wrapBtn__tell__wrap">
                <div><img src={f} alt="" className="wrapBtn__tell__img"/></div>
                <div className="wrapBtn__tell__title">
                  Фарид
                  <br />
                  <span className="wrapBtn__tell__subtitle">Главный механик</span>
                   
                </div>
                 
              </div>
            <a href='tel: +7 701 501 32 05' className="wrapBtn__tell">
                Позвонить
            </a>
            <Button link={'https://api.whatsapp.com/send/?phone=77015013205'} socNet={whatsapp} title='whatsapp'/>
            <Button link={'https://t.me/+77015013205'} socNet={telegram} title='telegram'/>
            <Button link={'https://instagram.com/avto.gavan.pvl?igshid=YWJhMjlhZTc='} socNet={instagram} title='instagram'/>
       </div>
       <div className="title">ТОО &nbsp; "Автогавань"</div>
    </div>
  );
}


