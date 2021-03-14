import "../../../styles/components/table/transactions-table-category.scss";

import React from "react";
import TableCell from "./table-cell";

interface Props {
  category: string;
}

const TransactionsTableCategory: React.FC<Props> = ({ category }) => (
  <TableCell className="transactions-table-category" label="category">
    <article className="transactions-table-category-text">{category}</article>
  </TableCell>
);

export default TransactionsTableCategory;
