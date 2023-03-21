import React from 'react'
import { useEffect } from 'react'
const Mounting = () => {
    useEffect(()=>{
        return ()=>{
          console.log('unmounting')
        }
      })
  return (
    <div>Mounting</div>
  )
}

export default Mounting