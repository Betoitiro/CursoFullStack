import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/index'
import {
  FaCheckCircle, FaEdit, FaExclamationTriangle,
  FaPlus, FaQuestionCircle, FaTrash
} from 'react-icons/fa'
import Modal from 'react-modal'

const FornecedorList = () => {
  const [fornecedores, setFornecedores] = useState([])
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null)
  const [modalAberto, setModalAberto] = useState(false)
  const [modalSucessoAberto, setModalSucessoAberto] = useState(false)
  const [tooltipAberto, setTooltipAberto] = useState(false)

  useEffect(() => {
    axios.get("/fornecedores")
      .then(response => {
        console.log(response.data)
        setFornecedores(response.data)
      })
      .catch(error => console.error("Error ao carregar fornecedores ", error))
  }, [])

  const abrirModal = (fornecedor) => {
    setFornecedorSelecionado(fornecedor)
    setModalAberto(true)

  }
  const fecharModal = () => {
    setModalAberto(false)
    setFornecedorSelecionado(null)
  }

  const abrirModalSucesso = () => {
    setModalSucessoAberto(true)
    setTimeout(() => setModalSucessoAberto(false), 2000)
  }

  const removerFornecedor = () => {
    axios.delete(`/fornecedores/${fornecedorSelecionado.id}`)
      .then(() => {
        setFornecedores(prevFornecedores => prevFornecedores.filter
          (fornecedor => fornecedor.id !== fornecedorSelecionado.id))
        fecharModal()
        abrirModalSucesso()
      })
  }

  const toggleTooltip = () => {
    setTooltipAberto(!tooltipAberto)
  }
  return (
    <div className='container mt-5'>
      <h2 className='mb-4' style={{ position: 'relative' }}>Lista de Fornecedores
        <FaQuestionCircle
          className='tooltip-icon'
          onClick={toggleTooltip}
        />
        {tooltipAberto && (<div className='tooltip'>
          Aqui você pode visualizar, editar e excluir os fornecedores cadastrados.
        </div>)}
      </h2>
      <Link to="/add-fornecedores" className='btn btn-primary mb-2'><FaPlus className='icon' /> Adcionar Fornecedor</Link>
      <table className='table'>
        <thead>
          <th>Nome: </th>
          <th>CNPJ: </th>
          <th>Email: </th>
          <th>Ações: </th>
        </thead>
        <tbody>
          {
            fornecedores.map(fornecedor => (
              <tr key={fornecedor.id}>
                <td>{fornecedor.nome}</td>
                <td>{fornecedor.cnpj}</td>
                <td>{fornecedor.email}</td>
                <td>
                  <Link to={`/edit-fornecedores/${fornecedor.id}`}
                    className='btn btn-sm btn-warning'>
                    <FaEdit className='icon icon-btn' />Editar
                  </Link>
                  <button onClick={() => abrirModal(fornecedor)}
                    className='btn btn-sm btn-danger'>
                    <FaTrash className='icon icon-btn' />Exluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        className='modal'
        overlayClassName='overlay'
      >
        <div className='modalContent'>
          <FaExclamationTriangle className='icon' />
          <h2>Confirmar exclusão</h2>
          <p>Tem certeza que deseja excluir o fornecedor?
            {fornecedorSelecionado && fornecedorSelecionado.nome}?
          </p>
          <div className='modalButtons'>
            <button onClick={fecharModal} className='btn btn-secondary'>
              Cancelar
            </button>
            <button onClick={removerFornecedor} className='btn btn-danger'>
              Excluir
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={modalSucessoAberto}
        onRequestClose={() => setModalSucessoAberto(false)}
        className='modal'
        overlayClassName='overlay'
      >

        <div className='modalContent'>
          <FaCheckCircle className='icon sucessIcon' />
          <h2>Fornecedor excluido com sucesso!</h2>
        </div>

      </Modal>

    </div>
  )
}

export default FornecedorList