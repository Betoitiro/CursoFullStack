
import './App.css'
import Adicao from './components/Adicao'
import CelsiusParaFahrenheint from './components/CelsiusParaFahrenheint'
import { PrecisoEstudar } from './components/PrecisoEstudar'
import Subtração from './components/Subtração'


function App() {

  return (
    <>
    <h1>Primeira parte da aula</h1>
      <Adicao num1={5} num2={40}/>
      <Subtração num1={5} num2={50}/>
      <PrecisoEstudar nomeDoEstudo={"ReactNative"}/>
      <CelsiusParaFahrenheint celsius={37}/>
    </>
  )
}

export default App
