import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicial from './pages/Inicial'
import SobreBookSpot from './pages/SobreBookSpot'
import Footer from './components/Footer'
import Resenhas from './pages/Resenhas'
import VisualizarResenha from './pages/VisualizarResenha'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>BookSpot - Resenhas Literarias</h1>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicial/>}/>
          <Route path='sobre-nos' element={<SobreBookSpot/>}/>
          <Route path='resenhas' element={<Resenhas/>}/>
          <Route path="visualiza-resenha/:id" element={<VisualizarResenha/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App