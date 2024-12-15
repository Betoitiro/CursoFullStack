import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicial from './pages/Inicial'
import SobreBookSpot from './pages/SobreBookSpot'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>BookSpot - Resenhas Literarias</h1>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicial/>}/>
          <Route path='sobre-nos' element={<SobreBookSpot/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App