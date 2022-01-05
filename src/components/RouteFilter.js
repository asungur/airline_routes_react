import React from 'react';

const RouteFilter = ({ handleFilter, airlines }) => (
  <div>
    <p>Filter:</p>
    <select onChange={handleFilter}>
      <option value="">Choose an airline...</option>
      {
        airlines.map(airline => (
          <option key={airline.id} value={airline.id}>{airline.name}</option>
        ))
      }
    </select>
  </div>
)


export default RouteFilter;
