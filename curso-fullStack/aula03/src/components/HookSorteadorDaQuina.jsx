import React from 'react'

const HookSorteadorDaQuina = () => {
    const [numeroSorteado, setNumeroSorteado] = useState()
    const [numerosSorteados, setNumerosSorteados] = useState([])

    function sortearNumero(){
        //usa o ".length" para ler a quantidade de objetos dentro do array
        if(numerosSorteados.length < 5){
            let sorteado = Math.floor(Math.random() * 80) + 1
            setNumeroSorteado(sorteado)
            setNumerosSorteados([...numerosSorteados, sorteado])
        }else{
            alert("Já temos 5 numeros sorteaddos")
        }
    }
  return (
    <div>HookSorteadorDaQuina</div>
  )
}

export default HookSorteadorDaQuina