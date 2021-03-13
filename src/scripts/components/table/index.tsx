import "../../../styles/components/table/table.scss";

import * as React from "react";
import { useTable, useSortBy } from "react-table";
import { Table as TableProps } from "../../../types/table";
import TableCellDescSort from "./table-cell-desc-sort";

const tableHeader = "Header";
const tableCell = "Cell";

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
              <th
                className="table-header-cell table-cell"
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render(tableHeader)}
                {column.isSorted && (
                  <TableCellDescSort isSortedDesc={column.isSortedDesc} />
                )}
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
              {row.cells.map((cell) => cell.render(tableCell))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
