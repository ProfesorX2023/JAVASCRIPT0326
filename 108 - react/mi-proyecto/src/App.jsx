import './App.css';
import Saludo from './components/Saludo';
import TarjetaPerfil from './components/TarjetaPerfil';

function App(){
  return(
    <div className="App">
      <h1>Mi primera App</h1>
      <p>Hola, estoy aprendiendo React!</p>
      <button>Click Aquí</button>
      <hr />
      <Saludo />
      <Saludo />
      <Saludo />
      <hr />
      <TarjetaPerfil />
      <TarjetaPerfil />

    </div>
  );
}

export default App;