import "../../../styles/components/table/transactions-table-category.scss";

import React from "react";
import TableCell from "./table-cell";

interface Props {
  category: string;
}

const TransactionsTableCategory: React.FC<Props> = ({ category }) => (
  <TableCell className="transactions-table-category" label="category">
    <span className="transactions-table-category-wrapper">{category}</span>
  </TableCell>
);

export default TransactionsTableCategory;
