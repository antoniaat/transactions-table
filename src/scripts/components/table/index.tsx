import * as React from "react";
import { useTable, useSortBy } from "react-table";
import { Table as TableProps } from "../../../types/table";

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: data.transactions,
    },
    useSortBy
  );

  return (
    <table className="table" {...getTableProps()}>
      <thead className="table-header">
        {headerGroups.map((headerGroup) => (
          <tr className="table-row" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="table-body" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="table-row" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className="table-cell" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
