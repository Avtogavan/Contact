import React, { useState } from 'react'
import s from './Search.module.sass'

export default function Search({setSearch}) {

  return (
    <div className={s.search}>
        <input 
            onChange={(e)=> setSearch(e.target.value)} 
            className={s.search__input} 
            type="text" 
            placeholder='Поиск по контактам...'
        />
    </div>
  )
}
