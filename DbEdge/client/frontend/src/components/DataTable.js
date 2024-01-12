import React from 'react';
import { useTable, useSortBy } from 'react-table';


const DataTable = ({ data, obj, sort=false }) => {
  const columns = React.useMemo(() => obj, [obj]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    sort ? useSortBy : undefined
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="w-full overflow-x-auto">
      <table {...getTableProps()} className="w-full border border-collapse">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(sort ? column.getSortByToggleProps() : {})}
                  className="bg-gray-200 p-2 font-semibold text-left"
                >
                  {column.render('Header')}
                  {sort && (
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="bg-white hover:bg-gray-100">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="p-2 border text-left"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
