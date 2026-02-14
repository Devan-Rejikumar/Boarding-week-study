import React, { useState } from 'react'

const useToggle = (initialValue = false) => {
    const [value,setValue] = useState(initialValue);
    const toggle = () =>{
        setValue(prev!=prev);
        const setTrue = () => setTrue(true);
        const setFalse = () => setFalse(false);
    }
  return {toggle,value,setTrue,setFalse}
}

export default useToggle
