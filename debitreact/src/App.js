import React from 'react';
import './App.css';
import Head from './components/Head/Head';
import Calc from './components/Calc/Calc';
import Buttons from './components/Buttons/Buttons';

function App() {
  return (
    <div className="App">
      <Head />
      <Calc />
      <Buttons />
    </div>
  );
}

export default App;
