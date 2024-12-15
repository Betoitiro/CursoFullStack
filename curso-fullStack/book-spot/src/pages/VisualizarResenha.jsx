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
        axios.get(`http://localhost:3000/resenhas/${id}`)
        .then(response => setResenha(response.data))
        .catch(error => console.error("Erro ao carregar a resenha ", error))
    }, [id])

  return (
    <div>
        <h2>{resenha.tituloLivro}</h2>
        <h3>Por {resenha.autor}</h3>
        <p>{resenha.conteudoCompleto}</p>
    </div>
  )
}

export default VisualizaResenha