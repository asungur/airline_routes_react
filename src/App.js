import React from 'react';
import './App.css';
import Table from './components/Table'
import Data, { getAirlineById, getAirportByCode } from './data.js';


const App = () => {
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  const formatValue = (property, value) => {
    if (property === 'airline') {
      return getAirlineById(value);
    } else if (property === 'src' || property === 'dest') {
      return getAirportByCode(value);
    } else {
      return '';
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Table
          className="routes-table"
          routes={Data.routes}
          columns={columns}
          handleFormat={formatValue}
        />
      </section>
    </div>
  )
};

export default App;
