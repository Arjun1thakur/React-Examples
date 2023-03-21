// [x]:- Send data parent to child  & Child to parent
// [x]: useRef Check child Component
/* 
import React, { useState } from 'react'
import Child from '../Components/Child'
const Home = () => {
    let [state,setState]=useState('Name')
    const data=(props)=>{
        setState(props)
    }
  return (
    <>
        <h2>{state}</h2>
        <br />
        <Child sendProp='Please Enter ' funcProp={data}/>
    </>
  )
}
export default Home
 */



// [x]: Context API & useContext Hook
/* 
import React, { createContext } from 'react'
import { arr } from '../Assets/data/data'
import ContexChild from '../Components/ContexChild'

let Contex=createContext();
const Home = () => {
  return (
      <Contex.Provider value={arr}>
          <ContexChild/>
      </Contex.Provider>
  )
}

export default Home
export {Contex} 
*/

// [x] : lazyLoading Check ContexChild
/* 
import React, { createContext} from 'react'
import ContexChild from '../Components/ContexChild'
import { arr } from '../Assets/data/data'

let Contex=createContext();
const Home = () => {
  return (
      <Contex.Provider value={arr}>
          <ContexChild/>
      </Contex.Provider>
  )
}

export default Home
export {Contex}
*/


// [x]: HOC check HOCChild

/* 
import React from 'react'
import HOCChild from '../Components/HOCChild'

const Home = () => {
  return (
    <HOCChild/>
  )
}

export default Home
*/

// [x]: Pure-Component
/* 
import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
  constructor(){
    super();
    this.state={
      number:0
    }
  }
  Inc=()=> {
    this.setState({number:this.state.number+1})
  }
  render() {
    console.log('ok')
    return (
      <>
        <h1>{this.state.number}</h1>
        <button onClick={this.Inc}>INC</button>
      </>
    )
  }
} 
*/

// [x]: useReducer

/* 
import React,{ useReducer }  from 'react'

let reducer=(state,action)=>{
  if(action.type==='inc'){
    return state+1
  }
  if(action.type==='dec'){
    return state-1
  }
}

const Home = () => {
  let [val,dispatch]=useReducer(reducer,0)
  return (
    <>
      <button onClick={()=>dispatch({type:'inc'})}>INC</button>
      <h1 style={{width:'100%',textAlign:'center'}}>{val}</h1>
      <button onClick={()=>dispatch({type:'dec'})}>DEC</button>
    </>
  )
}

export default Home 
 */

// [x]: React life-cycle using Class Component
/* 
import React, { Component } from 'react'
import Mounting from '../Components/Mounting';

export default class Home extends Component {
  constructor(){
    super();
    this.state={
      value:0,
      toggle:false
    }
  }
  inc=()=>{
    this.setState({value:this.state.value+1})
  }
  //  [ ]: componentDidMount
  // componentDidMount(){
  //   console.log('Mounting')
  // }
  //  [ ]: componentDidUpdate
  // componentDidUpdate(){
  //   console.log('updating')
  // }
  //  [ ]: componentWillUnmount  activate component CALLING
  // componentWillUnmount(){
  //   console.log('Unmounting')
  // }
  //  [ ]: getSnapshotBeforeUpdate need to return null/some value or work with componentDidUpdate
  getSnapshotBeforeUpdate(presta,newsta){
    console.log('getSnapshotBeforeUpdate-->',newsta)
    return null
  }
  render() {
    return (
      <>
        <h1>{this.state.value}</h1>
        <button onClick={this.inc}>Inc</button>
      </>
    )
    
    // NOTE: Component Calling
    // return (
    //   <>
    //     <h1>{this.state.toggle ? <Mounting/>:null}</h1>
    //     <button onClick={()=>this.setState({toggle:!this.state.toggle})}>Toogle Mounting</button>
    //   </>
    // )
  }
} 
 */


// [x]: useMemo 

/* 
import React, { useMemo, useState } from 'react'
import PureComponent from '../Components/pureComponent'
const Home = () => {
  let [state,setState]=useState(0)
  
  let [toggle,setToggle]=useState(false)
  const toggleFunc=useMemo(()=>{
    for(let i=0;i<100000000;i++){}
    return toggle
  },[toggle])
  return (
    <>
      <h1>{state}</h1>
      <button onClick={()=>setState(state+1)}>inc</button><br /><br />
      {toggleFunc?<PureComponent/>:null}
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    </>
  )
}  
export default Home
 */



// [x] : useCallback
/* 
import React, { useCallback, useMemo, useState } from 'react'

const Home = () => {
  let [num,setNum]=useState(0)
  let [bool,setBool]=useState(true)
  const inc=useCallback(()=>{    // NOTE: Change useCallback with useMemo 
    setNum(()=>num+1) 
},[num])

  return (
    <>{console.log(inc)}
        <h1>{num}</h1>
        <button onClick={inc}>Inc</button>
        <h1>{bool?'true':'false'}</h1>
        <button onClick={()=>setBool(!bool)}>Change</button>
    </>
  )
}
export default Home
 */


// [x] : useEffect Hook
/* 
import React, { useEffect, useState } from 'react'
import PureComponent from '../Components/pureComponent'

const Home = () => {
  // [ ]: Call each & every time or Component updating
  // useEffect(()=>{
  //   console.log('ok')
  // })
  // [ ]: Call one's when Component load / Mounting
  // useEffect(()=>{
  //     console.log('ok')
  // },[])
  // [ ]: Call one's when Component render / unmounting
  let [toggle,setToggle]=useState(true)
  
  return (
    <>
      {toggle?<PureComponent/>:null}
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    </>
  )
}

export default Home
 */


// [x]: Redux check ReducCounter Component
/* import React from 'react'
import ReducCounter from '../Components/ReducCounter'

const Home = () => {
  return (
    <>
      <ReducCounter/>
    </>
  )
}
export default Home */