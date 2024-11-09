import './App.scss';
import Cabecalho from './components/cabecalho';
import Card from './components/cards';


export default function App() {
  let assuntos = [];
  return (
    <div className="App">
      <Cabecalho/>

        <div className="conteudo">
           <h1>Conteúdos</h1>
           <h2>Atualizar</h2>
        </div>
          
        {assuntos.map(item => 
          <Card
            titulo='Componentes'
           
          />
        )}
           
    </div>
  );
}


