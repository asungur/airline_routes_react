import React from 'react';

const TableRow = ({ route, columns, handleFormat }) => (
  <tr>
    {columns.map((col, i) => (
      <td key={i}>
        {
          handleFormat(col.property, route[col.property])
        }
      </td>
    ))}
  </tr>
);

const Table = ({ page, routes, allRoutes, columns, handleFormat, handlePageChange }) => {

  const nextClick = () => {
    handlePageChange('increment');
  };

  const prevClick = () => {
    handlePageChange('decrement');
  };

  const first = ((page - 1) * 25) + 1;
  const last = (page * 25);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              columns.map((col, i) => (
                <th key={i}>{col.name}</th>
                ))
              }
          </tr>
        </thead>
        <tbody>
            {
              routes.map((route, i) => (
                <TableRow
                key={i}
                route={route}
                columns={columns}
                handleFormat={handleFormat}
                />
                ))
              }
        </tbody>
      </table>
      <p>
        <button
          disabled={page === 1}
          onClick={prevClick}
        >
          Previous Page
        </button>
        - Displaying {first} thru {last} of {allRoutes.length} -
        <button
          disabled={last >= allRoutes.length }
          onClick={nextClick}
        >
          Next Page
        </button>
        </p>
    </div>
  )
};

export default Table;
