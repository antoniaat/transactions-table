import "../../../styles/components/table/transactions-table-date.scss";

import React from "react";
import TableCell from "./table-cell";

interface Props {
  dateString: string;
}

const TransactionsTableDate: React.FC<Props> = ({ dateString = "" }) => {
  const dateTime = new Date(dateString);
  const date = dateTime.toDateString();

  return (
    <TableCell className="transactions-table-date" label="Date">
      <article className="transactions-table-date-content">{date}</article>
    </TableCell>
  );
};

export default TransactionsTableDate;
