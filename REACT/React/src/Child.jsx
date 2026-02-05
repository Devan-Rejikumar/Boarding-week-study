import React from 'react'
import useWindowResize from './useWindowResize'

const Child = ({data}) => {
  const width = useWindowResize();
  return (
    <div>
      <p>Width:{width}</p>
      
    </div>
  )
}

export default Child
