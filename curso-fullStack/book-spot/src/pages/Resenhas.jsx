import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Resenhas = () => {
    const [resenhas, setResenhas] = useState([])

    /**
     * Pegar as resenhas do backend
     * Esse useEffect vai ser execultado quando a pagina for carregada
     */

    useEffect(() =>{
            axios.get("http://localhost:3000/resenhas")
            .then(response => setResenhas(response.data))
            .catch(error => console.error("Error ao consultar as resenhas"))
    },[])

  return (
    <div>Resenhas</div>
  )
}

export default Resenhas