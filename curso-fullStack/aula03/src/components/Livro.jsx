
const Livro = ({titulo, autor, ano}) => {
  return (
    <div>
        <h2>{titulo}</h2>
        <p>Autor: {autor}</p>
        <p>ano: {ano}</p>
    </div>
  )
}

export default Livro