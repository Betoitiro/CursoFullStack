
import './App.css'
import TodoList from './components/TodoList'
//import HookContador from './components/HookContador'
//import Mensagem from './components/Mensagem'
//import './App.css'
//import Adicao from './components/Adicao'
//import CelsiusParaFahrenheint from './components/CelsiusParaFahrenheint'
//import ListaDeLivros from './components/ListaDeLivros'
//import { PrecisoEstudar } from './components/PrecisoEstudar'
//import Subtração from './components/Subtração'


function App() {
  {
    /**
     * 
    const livros = [
      {titulo: '1984', autor: 'George Orwel', ano: 1949},
      {titulo: 'O Grande Gatsby', autor: 'F. Scott Fitzgerald', ano: 1925},
      {titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', ano: 1605},
      {titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez', ano: 1967}
    ]; 
     */
  }


  return (
    <>
      {/**
      <h1>Primeira parte da aula</h1>
      <Adicao num1={5} num2={40} />
      <Subtração num1={5} num2={50} />
      <PrecisoEstudar nomeDoEstudo={"ReactNative"} />
      <CelsiusParaFahrenheint celsius={37} />

      <h1>Partindo para livros</h1>
      {/** 
       * Exemplo de componnentização
       * classe pai (Lista de livros)
       * classe filho (Livro)
       * 
      *
      <ListaDeLivros livros={livros} />
     * 
     * 
    

      <div className='container'>
        <h1>Renderização condicional simples</h1>
        <Mensagem tipo={"sucesso"}/>
        <Mensagem tipo={"aviso"}/>
        <Mensagem tipo={"erro"}/>
        </div>
        */}
      {/* <HookContador />*/}
      <TodoList/>
    </>
  )
}

export default App
