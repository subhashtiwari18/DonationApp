import React from 'react'
import NavBar from './Component/NavBar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Component/Home'
import DonorList from './Component/DonorList'

export default function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DonorList' element={<DonorList/>}/>

      </Routes>

      </Router>
      
    </div>
  )
}
