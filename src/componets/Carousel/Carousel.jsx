import React, {useState, useEffect, cloneElement, Children} from 'react'
import './Carousel.sass'
import usePropsChildren from './usePropsChildren';

const PAGE_WIDTH = 130

export default function Carousel({children, main, setmain, id, offset, pages, setPages}) {

    

    const addProps = usePropsChildren(pages, {main, setmain, id})

    useEffect(()=> {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        maxWidth: `${PAGE_WIDTH}px`,
                        minWidth: `${PAGE_WIDTH}px`,
                        // background: '#000',
                        

                    
                    }, 
                    activebtn:  {
                        animationName: 'br',
                        animationIterationCount: '1',
                        animationTimingFunction: 'ease-in-out' ,
                        animationDuration: '.5s',
                        textDecoration: 'none',
                        color: '#ffffff',
                        borderBottom: '2px solid #0697f1'
                    }


                })
            })
        )
    }, [])

  return (
        <div className="main-container">                    
            <div className="window">
                <div className="all-pages-container" style={{transform: `translateX(${offset}px)`}}>
                    {addProps}
                </div>
            </div>
        </div>
  )
}
