import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VisualizarResenha = () => {
    const { id } = useParams()
    conse [resenha, setResenha] = useState()

    /**
     *useEffect para pegar uma resenha especifica. [id] -> so carrega quando tiver o id
     */
    useEffect(()=> {
        axios.get(`http://localhost:3000/resenhas/${id}`)
        console.log(URL)
        .then(response => setResenha(response.data))
        .catch(error => console.error(`rro ao consultar as resenhas de id ${id}`,error))
    }, [id])
  return (
    <div>
        <h2>{resenha.tituloLivro}</h2>
        <h3>Por: {resenha.autor}</h3>
        <p>{resenha.conteudoCompleto}</p>
    </div>
  )
}

export default VisualizarResenha