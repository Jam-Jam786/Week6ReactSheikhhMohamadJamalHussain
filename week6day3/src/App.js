import logo from './logo.svg';
import './App.css';

import ColourButton from './ColourButton';
import { useState } from 'react';
function App() {

const [ColourList, setColourList] = useState(["red", "blue", "green"])

  return (
    <div className="App">
      <header className="App-header">

        <ColourButton/>

      </header>
    </div>
  );
}

export default App;
