import "../../../styles/components/table/transactions-table-amount.scss";

import React from "react";
import { TableRowProps } from "../../../types/table";
import { getClassName } from "../../utils/react-utils";
import TableCell from "../table/table-cell";

interface Props {
  row: TableRowProps;
}

const TransactionsTableAmount: React.FC<Props> = ({ row }) => {
  const { amount, gateway, currency_code: currencyCode } = row.original;

  const isIncomingTransaction = amount > 0;
  const combinedClassName = getClassName({
    "transactions-table-amount": true,
    "transactions-table-amount-incoming": isIncomingTransaction,
    "transactions-table-amount-outgoing": !isIncomingTransaction,
  });

  return (
    <TableCell
      row={row}
      className={combinedClassName}
      label="amount"
      value={amount}
    >
      <span className="transactions-table-amount-value">{gateway}</span>
      <span className="transactions-table-amount-currency">{currencyCode}</span>
    </TableCell>
  );
};

export default TransactionsTableAmount;
