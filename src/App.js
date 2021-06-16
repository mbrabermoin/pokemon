import './App.css';
import Pokedex from './Pokedex.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon" width="360" height="120"/>
        <Pokedex></Pokedex>
      </header>
    </div>
  );
}

export default App;
