import React from "react";

interface Props {
  isSortedDesc?: boolean;
}

const TableCellDescSort: React.FC<Props> = ({ isSortedDesc = true }) => (
  <span>{isSortedDesc ? " 🔽" : " 🔼"}</span>
);

export default TableCellDescSort;
