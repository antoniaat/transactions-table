import React, { useContext } from "react";
import { getClassName } from "../../utils/react-utils";
import { TableCellProps } from "../../../types/table";
import DataLoadingContext from "../contexts/data-loading-context";
import ContentLoading from "../content-loading";

const TableCell: React.FC<TableCellProps> = ({
  value,
  label,
  className = " ",
  children,
  renderValue = (val) => val,
}) => {
  const { isLoadingTransactions } = useContext(DataLoadingContext);
  const combinedClassName = getClassName({
    "table-cell": true,
    [className]: !!className,
  });

  const cellContent = children || renderValue(value);

  return (
    <td className={combinedClassName} data-label={label}>
      <ContentLoading isLoading={isLoadingTransactions}>
        {cellContent}
      </ContentLoading>
    </td>
  );
};

export default TableCell;
