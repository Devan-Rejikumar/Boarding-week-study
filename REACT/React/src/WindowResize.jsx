
import { useState } from 'react'
import Child from './Child';
import { useEffect } from 'react';

const WindowResize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(()=>{

            const handleResize = () =>{
        setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
    
   return () =>{
     window.removeEventListener('resize', handleResize);
   }

    },[])

    
  return (
    <div>
      <Child data={windowSize}/>
    </div>
  )
}

export default WindowResize

