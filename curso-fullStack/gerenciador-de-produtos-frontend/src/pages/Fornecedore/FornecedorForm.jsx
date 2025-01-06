import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/index'
import { FaQuestionCircle } from 'react-icons/fa'

const FornecedorForm = () => {
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    cnpj: '',
    email: '',
    tipoFornecedor: 'COMUM',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: 'Brasil'
    }
  })
  const [tooltipAberto, setTooltipAberto] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      //Buscando o fornecedor por id para editar
      axios.get(`/fornecedores/${id}`)
        .then(response => {
          //console.log(response.data)
          setFornecedor(response.data
          )
        })
        .catch(error => console.error("Erro ao carregar o fornecedor ", error))
    } else {
      //se não houver id, redefine o estado para adicionar um novo fornecedor
      setFornecedor({
        nome: '',
        cnpj: '',
        email: '',
        tipoFornecedor: 'COMUM',
        endereco: {
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          estado: '',
          pais: 'Brasil'
        }
      })
    }
  }, [id])

  const toogleTooltip = () => {
    setTooltipAberto(!tooltipAberto)
  }
  return (
    <div className='form-container'>
      <h2 style={{ position: 'relative' }}>
        {id ? 'Editar Fornecedor' : 'Adicionar Fornecedor'}
        {''}
        <FaQuestionCircle className='tooltip-icon'
          onMouseOver={toogleTooltip}
          onMouseOut={toogleTooltip}
        />
        {tooltipAberto && (
          <div className='tooltip'>
            {
              id ?
                'Nesta tela voce pode editar as informações de um fornecedor existente'
                :
                'Nesta tela, voce pode adicionar um novo fornecedor ao sistema'}
          </div>
        )}
      </h2>

    </div>
  )
}

export default FornecedorForm