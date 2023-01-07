import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import s from '../Cards/Cards.module.sass'
import Back from './../Cards/Back';
import CardItem from './../Cards/CardItem/CardItem';

export default function Profile(props) {
console.log(props.router.params);
    // useEffect(()=> {
    //     let id = props.router.params.id
    //     if (!id) {
    //         id = props.id 
    //         // if (!position) {
    //         //     props.router.navigate('/Contact')
    //         // }
    //     }
        
    // }, [props.router.params.id])

  return (
    <>
       <NavLink className={s.card__back} to={'/Contact'}>

            <Back/>

            &nbsp; 

            <div style={{marginBottom: ' 7px'}}> 
                На главную 
            </div>
        </NavLink>
        
        <CardItem
            namePerson={props.namePerson} 
            position={props.position} 
            image={props.image} 
            inst={props.inst} 
            phone={props.phone}
        />
    </>
  )
}
