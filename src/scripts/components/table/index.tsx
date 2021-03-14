import "../../../styles/components/table/table.scss";

import * as React from "react";
import { useTable, useSortBy, Cell, HeaderGroup, Row } from "react-table";
import { TableProps } from "../../../types/table";
import TableCellDescSort from "./table-cell-desc-sort";
import { Transaction } from "../../../types/transaction";

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
        {headerGroups.map((headerGroup: HeaderGroup<Transaction>) => (
          <tr className="table-row" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: HeaderGroup<Transaction>) => (
              <th
                className="table-header-cell table-cell"
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render(tableHeader)}
                <TableCellDescSort
                  isSorted={column.isSorted}
                  isSortedDesc={column.isSortedDesc}
                />
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="table-body" {...getTableBodyProps()}>
        {rows.map((row: Row<Transaction>, _) => {
          prepareRow(row);

          return (
            <tr className="table-row" {...row.getRowProps()}>
              {row.cells.map((cell: Cell<Transaction>) =>
                cell.render(tableCell)
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
