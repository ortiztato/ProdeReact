
import './App.css';
import Desilusion from './components/Desilusion/Desilusion';
import Ganador from './components/Ganador/ganador';
import Goleadores from './components/Goleadores/Goleadores';
import Lamentable from './components/Lamentable/Lamentable';
import Revelacion from './components/Revelacion/Revelacion';
import Semis from './components/Semis/Semis';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      </header>
      <div className="tituloequipos">PRODE MUNDIAL 2022</div>
      <Ganador />
      <Desilusion />
      <Revelacion />
      <Lamentable />
      <Semis />
      <Goleadores />


    </div>

  );
}

export default App;
