import logo from './logo.svg';
import './App.css';
import Calculator from './CalculatorDisplay.js'
import CalculatorDisplay from './CalculatorProject.js'
import CalculatorButtons from './CalculatorButtons.js'
import { useState } from 'react';


function App() {

const [Input, setInput] = useState("")
const [Results, setResults] = useState("")




  return (
    <div className="App">
      <header className="App-header">

        <CalculatorDisplay></CalculatorDisplay>
        <Calculator></Calculator>
        <CalculatorButtons></CalculatorButtons>

      </header>
    </div>
  );
}

export default App;
