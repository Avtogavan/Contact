import {useEffect, useState} from 'react'
import { CardsData } from '../CardsData'
import s from '../Cards/Cards.module.sass'
import {useNavigate, useParams } from 'react-router-dom'
import SlideItem from '../SlideItem/SlideItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import CardItem from '../Cards/CardItem/CardItem'
import swipeFinger from '../../img/swipeFinger.gif'
export default function ProfileContainer({param, setParam}) {

    let navigate = useNavigate()  
    const {id} = useParams()

    useEffect(()=> {
        navigate(`/${param}`, {replace: true})
    }, [param])

    const arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 
    let init = arrNumber.find((e)=> e == id)

    const onSlide = (e) => {
        setParam(e.realIndex)
    }

    return (
            <> 
                <div className={s.card__finger}>
                    <img src={swipeFinger} className={s.card__finger__item} alt="" />
                </div>

                <Swiper
                    style={{width: '360px', margin: 'auto', overflow: 'hidden'}}
                    initialSlide={init}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    onActiveIndexChange={e=> setParam(e.realIndex)}
                    onSlideChange={onSlide}
                >
                { CardsData.map((e, i) => 
                    <SwiperSlide key={i}>
                        <SlideItem 
                            id={e.id}
                            // setParam={setParam}
                            param={param}
                            image={e.image} 
                            namePerson={e.namePerson} 
                            position={e.position}
                        />
                    </SwiperSlide> 
                        
                )}
                </Swiper>
                
                { CardsData.filter(e=> e.id === param).map((e, i) => 
                    <div className={s.card__width} key={i}> 
                    
                        <CardItem
                            namePerson={e.namePerson} 
                            position={e.position} 
                            image={e.image} 
                            phone={e.phone}
                        />
                        
                    </div> 
                )}
            </>
            
        )
}
