import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => (
  <select
    onChange={onSelect}
    value={value}
  >
    <option>{allTitle}</option>
    {
      options.map(option => (
        <option
          key={option[valueKey]}
          value={option[valueKey]}
          disabled={option.disabled}
        >
          {option[titleKey]}
        </option>
      ))
    }
  </select>
)

const RouteFilter = ({
    currentAirport,
    currentAirline,
    handleClear,
    handleAirlineFilter,
    handleAirportFilter,
    airlines,
    airports }
  ) => (
  <div>
    <Select
      options={airlines}
      valueKey="id"
      titleKey="name"
      allTitle="All Airlines"
      value={currentAirline}
      onSelect={handleAirlineFilter}
    />
    <Select
      options={airports}
      valueKey="code"
      titleKey="name"
      allTitle="All Airports"
      value={currentAirport}
      onSelect={handleAirportFilter}
    />
    <button onClick={handleClear}>Show All Routes</button>
  </div>
)


export default RouteFilter;
