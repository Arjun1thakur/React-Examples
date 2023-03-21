import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { inc,dec } from '../Store/Slice'
const ReducCounter = () => {
    let dispatch = useDispatch()
    let select=useSelector((state)=>state.count)
  return (
    <div>
        <button onClick={()=>dispatch(inc())}>Inc.</button>
        <h1>{select.no}</h1>
        <button onClick={()=>dispatch(dec())}>Dec.</button>
    </div>
  )
}

export default ReducCounter