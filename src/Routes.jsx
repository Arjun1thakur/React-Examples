import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Api from './API/api'
import ClassWork from './Pages/classWork'
import DisplayClass from './Pages/DisplayClass'
import Home from './Pages/Home'
const Main = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/class' element={<ClassWork/>}/>
            <Route path='/DisplayClass' element={<DisplayClass/>}/>
            <Route path='/api' element={<Api/>}/>
        </Routes>
    </Router>
  )
}

export default Main