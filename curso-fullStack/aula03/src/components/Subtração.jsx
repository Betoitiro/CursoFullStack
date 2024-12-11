import React from 'react'

const Subtração = ({num1, num2}) => {
  const result = num1 - num2
    return (
    <div>
        O resultado de {num1} menos {num2} é de {result}
    </div>
  )
}

export default Subtração