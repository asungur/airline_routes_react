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

const Table = ({ routes, columns, handleFormat }) => {
  return (
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
  )
};

export default Table;
