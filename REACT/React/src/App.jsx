import React from 'react'
import useUniqueNumbers from './useUniqueNumbers';


const App = () => {
      const numbers = 'devavvvananaaaa'
      const uniqueNumbers = useUniqueNumbers(numbers);
  return (

    <div>
      <h3>Unique Numbers</h3>
      <h2>{uniqueNumbers.join(',')}</h2>
    </div>
  )
}

export default App
