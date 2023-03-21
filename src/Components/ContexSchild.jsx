import React,{ useContext }  from 'react'
import { Contex } from '../Pages/Home'

const ContexSchild = () => {
    let val=useContext(Contex)
    console.log(val)
  return (
/*     <Contex.Consumer>
        {(arr)=>
            <h1>Sub Child Made by {arr}</h1>
        }
    </Contex.Consumer> */

    <h1>Sub Child Made by {val}</h1>
  )
}

export default ContexSchild