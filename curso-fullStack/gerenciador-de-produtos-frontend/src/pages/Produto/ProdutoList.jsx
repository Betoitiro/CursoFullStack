import React, { useEffect, useState } from 'react'
import axios from '../../api/index'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaEdit, FaExclamationTriangle, FaPlus, FaTrash } from 'react-icons/fa'
import Modal from 'react-modal'


const ProdutoList = () => {

    const [produtos, setProdutos] = useState([])
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)
    const [modalAberto, setModalAberto] = useState(false)
    const [modalSucessoAberto, setModalSucessoAberto] = useState(false)

    useEffect(() => {
        axios.get("/produtos")
            .then(res => {
                console.log(res.data)
                setProdutos(res.data)
            })
            .catch(error => console.error("Erro ao carregar os produtos ", error))
    })

    //funções para modal

    const abrirModal = (produto) => {
        setProdutoSelecionado(produto)
        setModalAberto(true)
    }

    const fecharModal = () => {
        setModalAberto(false)
        setProdutoSelecionado(null) //fica nulo pois ja que o modal vai ser fechado, n ha necessidade de salvar
        //nesse sentido o valor do state fica null
    }

    const abrirModalSucesso = () => {
        setModalSucessoAberto(true)
        setTimeout(() => setModalSucessoAberto(false), 2000)
    }

    const removerProduto = () => {
        axios.delete(`/produtos/${produtoSelecionado.id}`)
            .then(() => {
                setprodutos(prevprodutos => prevprodutos.filter(produto => produto.id !== produtoSelecionado.id))
                fecharModal()
                abrirModalSucesso()
            })
    }


    return (
        <div>
            <div className='container mt-5'>
                <h2 className='mb-4' style={{ position: 'relative' }}>Lista de produtos</h2>
                <Link to="/add-produto" className='btn btn-primary mb-2'><FaPlus className='icon' />Adicionar Produtos</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome:</th>
                            <th>Preco:</th>
                            <th>Descrição</th>
                            <th>Quantidade Em estoque</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos.map(produto => (
                                <tr key={produto.id}>
                                    <td>{produto.nome}</td>
                                    <td>{produto.preco}</td>
                                    <td>{produto.descricao}</td>
                                    <td>{produto.quantidadeEstoque}</td>
                                    <td>
                                        <Link to={`/edit-produtos/${produto.id}`} className='btn btn-sm btn-warning'>
                                            <FaEdit className='icon icon-btn' /> Editar
                                        </Link>
                                        <button onClick={() => abrirModal(produto)} className='btn btn-sm btn-danger'>
                                            <FaTrash className='icon icon-btn' /> Excluir
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
                        <p>Tem certeza que deseja excluir o produto {produtoSelecionado && produtoSelecionado.nome}?</p> {/* Atualizado para produtoSelecionado */}
                        <div className='modalButtons'>
                            <button onClick={fecharModal} className='btn btn-secondary'>
                                Cancelar
                            </button>
                            <button onClick={removerProduto} className='btn btn-danger'>
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
                        <h2>Produto excluído com sucesso!</h2>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default ProdutoList