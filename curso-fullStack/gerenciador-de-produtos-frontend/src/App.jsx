import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import FornecedorList from './pages/Fornecedore/FornecedorList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <FornecedorList/>
      </BrowserRouter>
    </div>
  )
}

export default App