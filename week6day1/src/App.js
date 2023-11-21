import logo from './logo.svg';
import './App.css';
import RandomNumberGame from './guessGame.js';
import { useState } from 'react';

function App() {

const [colours, setColours] = useState(["orange", "green", "pink", "purple", "pink"])

  return (
    <div className="App">
      <header className="App-header">
        {colours.map((col) => {
          // for every colour in the array, render the game component, passing in the current colour as props
          return(
            <RandomNumberGame colour = {col} numberAnswer = {10} trys = {5}/>
          )
        })}

      </header>
    </div>
  );
}

export default App;
