import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from '../../api/index'
import {FaPlus} from 'react-icons/fa'

const FornecedorList = () => {
  const [fornecedores, setFornecedores] = useState([])
  useEffect(() => {
    axios.get("/fornecedores")
      .then(response => setFornecedores(response.data))
      .catch(error => console.error("Error ao carregar fornecedores ", error))
  }, [])
  return (
    <div className='container mt-5'>
      <h2 className='mb-4' style={{ position: 'relative' }}>Lista de Fornecedores</h2>
      <Link to="/add-fornecedores" className='btn btn-primary mb-2'><FaPlus className='icon'/> Adcionar Fornecedor</Link>
    </div>
  )
}

export default FornecedorList