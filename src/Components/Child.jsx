// [x]  useRef

import React, { useRef } from 'react'

const Child = ({sendProp,funcProp}) => {
    const value=useRef('Name')
    let submitHandler=()=>{
      funcProp(value.current.value)
    }
  return (
    <>
        <input type="text" ref={value}/>
        <br /><br />
        <button onClick={submitHandler}>{sendProp}</button>
    </>
  )
}

export default Child







