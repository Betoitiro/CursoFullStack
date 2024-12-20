import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import FornecedorList from './pages/Fornecedore/FornecedorList'
import ClientList from './pages/Cliente/ClientList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <FornecedorList/>
        <ClientList/>
      </BrowserRouter>
    </div>
  )
}

export default App