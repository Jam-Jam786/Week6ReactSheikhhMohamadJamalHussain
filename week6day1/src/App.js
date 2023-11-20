import logo from './logo.svg';
import './App.css';
import RandomNumberGame from './guessGame.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <RandomNumberGame numberAnswer = {10}/>
      </header>
    </div>
  );
}

export default App;
