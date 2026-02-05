import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(()=>{
        const handleChange = () =>{
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize',handleChange);
        return  () =>{
            window.removeEventListener('resize',handleChange);
        }
    },[])
  return (
    windowSize
  )
}

export default useWindowResize
