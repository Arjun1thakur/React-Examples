/* import React, { useEffect, useState } from 'react'

let Data=[];
let LatestStoriesData=[]
const DataX = () => {
    let [data,setData]=useState([]);
    let [latestStoriesData,setLatestStoriesData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/')
        .then(res=>res.json())
        .then(res=>{
            setData(res.Data)
            setLatestStoriesData(res.LatestStoriesData)
        })
    },[])
    Data.push(data)
    LatestStoriesData.push(latestStoriesData)
  return (
    <div>Data</div>
  )
}
export default DataX
export {LatestStoriesData,Data} */

/* import React from 'react'
import DataX, { Data,LatestStoriesData } from './Trail'
const Api = () => {
  return (
    <>
        <DataX/>
        {console.log(Data,LatestStoriesData)}
        <h1>Home API</h1>
    </>
  )
}

export default Api */