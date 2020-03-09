import React from 'react';
import './App.css';
import Head from './components/Head/Head';
import Calc from './components/Calc/Calc';
import Buttons from './components/Buttons/Buttons';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Head />
      <Calc />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;
