import React, { useEffect, useState } from 'react'

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
  return 
}
export default DataX
export {LatestStoriesData,Data}