import React, {useEffect, useState} from 'react'
import { CardsData } from '../CardsData'
import s from '../Cards/Cards.module.sass'
import {useNavigate, useParams } from 'react-router-dom'
import SlideItem from '../SlideItem/SlideItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import CardItem from '../Cards/CardItem/CardItem'

export default function ProfileContainer({param, setParam}) {

    let navigate = useNavigate()  
    let userId = useParams()

    useEffect(()=> {
        
        navigate(`/${param}`, {replace: true})
    }, [ param])
 

    console.log(param);
    useEffect(()=> {
        window.addEventListener('',  ()=> setParam(userId.id))
        return () => {
            window.removeEventListener('load',  ()=> setParam(userId.id))
          };
    }, [param])

    return (
            <> 
                <Swiper
                    style={{width: '600px'}}
                    initialSlide={param}
                    centeredSlides={true}
                    slidesPerView={3}
                    // onSwiper={swiper}
                    spaceBetween={0}
                    loop={true}
                    onActiveIndexChange={e=> setParam(e.realIndex)}
                    onSlideChange={e=> setParam(e.realIndex)}
                >
                { CardsData.map((e, i) => 
                    <SwiperSlide key={i}>
                        <SlideItem 
                            id={e.id}
                            param={param}
                            image={e.image} 
                            namePerson={e.namePerson} 
                            position={e.position}
                        />
                    </SwiperSlide> 
                        
                )}
                </Swiper>
                
               
                {/* </div>  */}

                { CardsData.filter(e=> e.id === param).map((e, i) => 
                    <div className={s.card__width} key={i}> 
                    
                        <CardItem
                            namePerson={e.namePerson} 
                            position={e.position} 
                            image={e.image} 
                            inst={e.inst} 
                            phone={e.phone}
                        />
                        
                    </div> 
                )}
            </>
            
        )
}
