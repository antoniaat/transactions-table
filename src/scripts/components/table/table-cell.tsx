import React, { useContext } from "react";
import { TableCell as TableCellProps } from "../../../types/table";
import DataLoadingContext from "../contexts/data-loading-context";
import ContentLoading from "../content-loading";
import { getClassName } from "../../utils/react-utils";

const TableCell: React.FC<TableCellProps> = ({
  value,
  label,
  className = " ",
  children,
  renderValue = val => val,
}) => {
  const { isLoadingTransactions } = useContext(DataLoadingContext);
  const combinedClassName = getClassName({
    "table-cell": true,
    [className]: !!className,
  });

  return (
    <td className={combinedClassName} data-label={label}>
      {children}
      <ContentLoading isLoading={isLoadingTransactions}>
        {renderValue(value)}
      </ContentLoading>
    </td>
  );
};

export default TableCell;
