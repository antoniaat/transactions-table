import React from "react";
import { TableCell as TableCellProps } from "../../../types/table";

const TableCell: React.FC<TableCellProps> = ({ value, label }) => (
  <td className="table-cell" data-label={label}>
    {value}
  </td>
);

export default TableCell;
