import React from 'react'

const Exxercicio03 = () => {
    const condicao = false;

    const estiloCondicional = condicao
        ? {
            color: '#ffa500',
            backgroundColor: '#808080',
            height: '150px',
            margin: '20px'
        }
        : {
            color: '#00800',
            backgroundColor: '#ffff0',
            height: '100px',
            margin: '10px'
        }
  return (
        <div style={estiloCondicional}>
            Texto com estilo inline dinamico!
        </div>
    )
}

export default Exxercicio03