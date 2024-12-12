import React, { useState } from 'react'

const HookMegaSena = () => {
    const [numeroSorteado, setNumeroSorteado] = useState()
    const [numerosSorteados, setNumerosSorteados] = useState([])

    function sortearNumero(){
        //usa o ".length" para ler a quantidade de objetos dentro do array
        if(numerosSorteados.length < 6){
            let sorteado = Math.floor(Math.random() * 60) + 1
            setNumeroSorteado(sorteado)
            setNumerosSorteados([...numerosSorteados, sorteado])
        }else{
            alert("Já temos 6 numeros sorteaddos")
        }
    }
  return (
    <div>
        <h1>Sorteador da Mega em React</h1>

        <button onClick={sortearNumero}>Sortear numero</button>

        <h1>Ultimo numero sorteado: {numeroSorteado}</h1>
        <h1>Sorteados: {numerosSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookMegaSena