import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VisualizaResenha = () => {

    const { id } = useParams()
    const [resenha, setResenha] = useState({})

    /*
    useEffect para fazer o get na resenha
    especifica. [id] -> só carrega quando tiver
    o id
    */

    useEffect(() => {
        axios.get(`http://localhost:8080/v1/book/${id}`)
        .then(response => setResenha(response.data))
        .catch(error => console.error("Erro ao carregar a resenha ", error))
    }, [id])

  return (
    <div>
        <h2>{resenha.titulo}</h2>
        <h3>Por: {resenha.autor.name}</h3>
        <p>{resenha.conteudo}</p>
    </div>
  )
}

export default VisualizaResenha