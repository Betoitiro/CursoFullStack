import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import FornecedorList from './pages/Fornecedore/FornecedorList'
import ClientList from './pages/Cliente/ClientList'
import ProdutoList from './pages/Produto/ProdutoList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <FornecedorList/>
        <ClientList/>
        <ProdutoList/>
      </BrowserRouter>
    </div>
  )
}

export default App