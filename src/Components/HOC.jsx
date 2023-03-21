// [x]: HOC

import React, { useState } from 'react'

const HOC = (Props) => {
  const MainFunc=()=>{
    let [state,setState]=useState(0)
    let inc=()=>{
        setState(state+1);
    }
    return (
        <>
            <Props state={state} funcInc={inc}/>
        </>
    )
  }
  return MainFunc
}

export default HOC