import '../../../styles/components/table/table-cell-desc-sort.scss'

import React from "react";
import { getClassName } from "../../utils/react-utils";

interface Props {
  isSortedDesc?: boolean;
}

const TableCellDescSort: React.FC<Props> = ({ isSortedDesc = true }) => {
  const combinedClassName = getClassName({
    "table-cell-desc-sort": true,
    "table-cell-desc-sort-up": isSortedDesc,
    "table-cell-desc-sort-down": !isSortedDesc,
  });

  return <span className={combinedClassName} />;
};

export default TableCellDescSort;
