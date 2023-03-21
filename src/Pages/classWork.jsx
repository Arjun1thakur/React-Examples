import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { add,clearState } from '../Store/classSlice'
import { useNavigate } from 'react-router-dom'
const ClassWork = () => {
    let navigate=useNavigate()
    let dispatch = useDispatch()
    function FetchData() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                return dispatch(add(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    let Display=()=>{
        navigate('/DisplayClass')
    }
    let deleteState=()=>{
        dispatch(clearState())
    }
  return (
    <div>
        <button onClick={FetchData}>Fetch</button>
        <button onClick={deleteState}>Delete</button>
        <button onClick={Display}>Display</button>
    </div>
  )
}

export default ClassWork