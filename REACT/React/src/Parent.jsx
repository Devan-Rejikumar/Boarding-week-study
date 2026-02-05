import React from 'react'
import { useRef } from 'react'
import Child from './Child';

const Parent = () => {
    const inputRef = useRef(null);
    const handleFocus = () =>{
        inputRef.current.focus();
    }
  return (
    <div>
      <button onClick={handleFocus}>Click me</button>
      <Child inputRefd={inputRef}/>
    </div>
  )
}

export default Parent
