import React from 'react'
import useToggle from './useToggle'

const Button = () => {
    const {value, toggle} = useToggle(false);

  return (
    <div>
      <p>Status:{value ? ON: OFF}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Button
