import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import RouteFilter from './components/RouteFilter';
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

  const [page, setPage] = useState(1);
  const [airport, setAirport] = useState('all');
  const [airline, setAirline] = useState('all');
  const [routesToShow, setRoutesToShow] = useState(Data.routes);
  const [paginatedRoutes, setPaginatedRoutes] = useState(routesToShow.slice(0, 24));

  const filterAirlines = (event) => {
    const airlineInput = Number(event.target.value);
    const airlineToFilter = !airlineInput ? 'all' : airlineInput
    filterResults(airlineToFilter, airport);
    setAirline(airlineToFilter);
  };

  const filterAirports = (event) => {
    const airportInput = event.target.value;
    const airportToFilter = !airportInput ? 'all' : airportInput
    filterResults(airline, airportToFilter);
    setAirport(airportToFilter);
  };

  const filterResults = (airlineToFilter, airportToFilter) => {
    let filteredRoutes = Data.routes;
    if (airlineToFilter !== 'all') {
      filteredRoutes = filteredRoutes.filter(route => route.airline === airlineToFilter);
    }
    if (airportToFilter !== 'all') {
      filteredRoutes = filteredRoutes.filter(route => route.src === airportToFilter || route.dest === airportToFilter);
    }
    setRoutesToShow(filteredRoutes);
    paginateRoutes(page, filteredRoutes);
  }

  const processPageChange = (action) => {
    let newPage = page;
    if (action === 'increment') {
      newPage = page + 1;
    } else if (action === 'decrement') {
      newPage = page -1;
    }
    setPage(newPage);
    paginateRoutes(newPage, routesToShow);
  }

  const paginateRoutes = (page, routes) => {
    let start = (page - 1) * 25;
    let end = (page * 25) - 1;
    setPaginatedRoutes(routes.slice(start, end));
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <RouteFilter
          handleAirlineFilter={filterAirlines}
          handleAirportFilter={filterAirports}
          airlines={Data.airlines}
          airports={Data.airports}
        />
      </section>
      <section>
        <Table
          className="routes-table"
          allRoutes = {routesToShow}
          routes={paginatedRoutes}
          columns={columns}
          handleFormat={formatValue}
          page={page}
          handlePageChange={processPageChange}
        />
      </section>
    </div>
  )
};

export default App;
