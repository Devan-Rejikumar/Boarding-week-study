import React from 'react'
import useInput from './useInput'

const Form = () => {
    const name = useInput("");
    const email = useInput("");
  return (
    <div>
      <input type="text" {...name}/>
      <input type="text" {...email} />
      <p>{name.value}</p>
      <p>{email.value}</p>
    </div>
  )
}

export default Form
