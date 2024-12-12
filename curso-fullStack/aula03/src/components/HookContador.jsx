import React, { useState } from 'react'

const HookContador = () => {
    const [contador, setContador] = useState(1)

    function incrementarContador() {
        setContador(contador +1)
    }
    function decrementarContador(){
        setContador(contador -1)
    }

  return (
    <div>
        <h1>Exemplo Hook Contador</h1>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <br />
        <button onClick={decrementarContador}>Decrementar contador</button>
        <br />
        <h1>Contador {contador}</h1>
    </div>
  )
}

export default HookContador