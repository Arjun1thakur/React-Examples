import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DisplayClass = () => {
    let navigate=useNavigate()
    let select=useSelector((state)=>state.fetchData)
  return (
    <div>{select.slice(1,20).map((data)=>{
        return (
        <div key={data.id} style={{width:'90%',boxShadow:'1px 1px 5px gray',margin:'10px auto',textAlign:'center'}}>
            <p>{data.id}</p>
            <h1>{data.title}</h1>
            <p>Status :- {data.completed?'Done':'Error'}</p>
        </div>
        )
    })}</div>
  )
}

export default DisplayClass