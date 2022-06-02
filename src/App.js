import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BodyWeight } from './pages/BodyWeight'
import { Exercises } from './pages/Exercises'
import { Home } from './pages/Home'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>BODY UPGRADER</p>
      </header>

      <div className='App-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='exercises' element={<Exercises />} />
          <Route path='bodyweight' element={<BodyWeight />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
