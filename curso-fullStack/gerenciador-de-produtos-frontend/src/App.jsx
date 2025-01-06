import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import FornecedorList from './pages/Fornecedore/FornecedorList'
import ClientList from './pages/Cliente/ClientList'
import ProdutoList from './pages/Produto/ProdutoList'
import FornecedorForm from './pages/Fornecedore/FornecedorForm'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <FornecedorForm/>
      </BrowserRouter>
    </div>
  )
}

export default App