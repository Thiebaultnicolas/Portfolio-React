import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Cv from '../pages/Cv'

function Path() {
  return (
    <BrowserRouter >
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cv" element={<Cv/>} /> 
          </Routes>
    </BrowserRouter >
  )
}

export default Path