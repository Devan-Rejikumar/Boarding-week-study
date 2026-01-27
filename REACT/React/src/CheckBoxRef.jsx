import React from 'react'
import { useRef } from 'react';

const CheckBoxRef = () => {
    const checkBoxRef = useRef(null);
    const handleClick = () =>{
        checkBoxRef.current.checked = !checkBoxRef.current.checked
    }
  return (
    <div>
      <input type="checkbox" ref={checkBoxRef}/>
      <button onClick={handleClick}>Click Me </button>
    </div>
  )
}

export default CheckBoxRef
