import React, { useEffect, useState } from 'react'

const PureComponent = () => {
  let [count,setCount]=useState(0)
  const inc=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    const counter=setInterval(inc,1000)
    return ()=>{
      clearInterval(counter)
      console.log('count')
    }
  },[count])
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default PureComponent