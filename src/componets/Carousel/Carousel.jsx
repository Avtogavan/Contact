import React, {useState, useEffect, cloneElement, Children} from 'react'
import './Carousel.sass'
import usePropsChildren from './usePropsChildren';

export default function Carousel({children, main, setmain, id}) {

    const [pages, setPages] = useState([])

    const addProps = usePropsChildren(pages, {main, setmain, id})

    useEffect(()=> {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        // maxWidth: '100%',
                        // minWidth: '100%',

                    
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
        <div className="all-pages-container">
            {addProps}
        </div>
      </div>
    </div>
  )
}
