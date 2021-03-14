import '../../../styles/components/table/transactions-table-date.scss'

import React from "react";

interface Props {
  dateString: any;
}

const TransactionsTableDate: React.FC<Props> = ({ dateString = "" }) => {
  const dateTime = new Date(dateString);
  const date = dateTime.toDateString();

  return <span className="transactions-table-date-wrapper">{date}</span>;
};

export default TransactionsTableDate;
