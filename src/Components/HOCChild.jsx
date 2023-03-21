import React from 'react'
import HOC from './HOC'

const HOCChild = ({state,funcInc}) => {
  return (
    <>
        <h1>{state}</h1>
        <button onClick={funcInc}>INC</button>
    </>
  )
}

export default HOC(HOCChild)