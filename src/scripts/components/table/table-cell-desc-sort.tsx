import "../../../styles/components/table/table-cell-desc-sort.scss";

import React from "react";
import { getClassName } from "../../utils/react-utils";

interface Props {
  isSorted: boolean;
  isSortedDesc?: boolean;
}

const TableCellDescSort: React.FC<Props> = ({
  isSorted,
  isSortedDesc = true,
}) => {
  const combinedClassName = getClassName({
    "table-cell-desc-sort": true,
    "table-cell-desc-sort-up": isSortedDesc,
    "table-cell-desc-sort-down": !isSortedDesc,
  });

  if (!isSorted) {
    return null;
  }

  return <span className={combinedClassName} />;
};

export default TableCellDescSort;
