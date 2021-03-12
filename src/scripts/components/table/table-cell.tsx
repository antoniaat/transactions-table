import React, { useContext } from "react";
import { TableCell as TableCellProps } from "../../../types/table";
import DataLoadingContext from "../contexts/data-loading-context";
import ContentLoading from "../content-loading";

const TableCell: React.FC<TableCellProps> = ({ value, label }) => {
  const { isLoadingTransactions } = useContext(DataLoadingContext);

  return (
    <td className="table-cell" data-label={label}>
      <ContentLoading text={value} isLoading={isLoadingTransactions} />
    </td>
  );
};

export default TableCell;
