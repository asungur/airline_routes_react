import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => (
  <select onChange={onSelect}>
    <option value={value}>{allTitle}</option>
    {
      options.map(option => (
        <option key={option[valueKey]} value={option[valueKey]}>{option[titleKey]}</option>
      ))
    }
  </select>
)

const RouteFilter = ({ handleAirlineFilter, handleAirportFilter, airlines, airports }) => (
  <div>
    <Select
      options={airlines}
      valueKey="id"
      titleKey="name"
      allTitle="All Airlines"
      value=""
      onSelect={handleAirlineFilter}
    />
    <Select
      options={airports}
      valueKey="code"
      titleKey="name"
      allTitle="All Airports"
      value=""
      onSelect={handleAirportFilter}
    />
  </div>
)


export default RouteFilter;
