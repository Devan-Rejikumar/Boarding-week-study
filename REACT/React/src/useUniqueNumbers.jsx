import React from 'react'
import { useMemo } from 'react'

const UniqueNumbers = (array) => {
    const uniqueArray = useMemo(()=>{
        return [...new Set(array)]
    },[array])
    return uniqueArray
}

export default UniqueNumbers
