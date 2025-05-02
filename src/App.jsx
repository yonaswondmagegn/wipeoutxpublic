import './App.css'
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Success from './Stirpe/Success'
import Failed from './Stirpe/Failed'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<div>Hellow</div>} />
      <Route path='/cancel' element = {<Failed />} />
      <Route path='/success' element = {<Success />} />
    </Routes>
    </>
  )
}

export default App
