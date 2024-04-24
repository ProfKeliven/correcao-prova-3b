import './App.css'
import Cabecalho from './components/Cabecalho'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
      <Cabecalho />
      <Evento 
        titulo={'Evento do senai'}
        descricao={'descricao do evento'}
        horario={'dia 24 as 12h'}
        local={'sala de aula'}
      />
      <Galeria />
      <Rodape />
    </>
  )
}

export default App
