import "../../../styles/components/table/transactions-table-amount.scss";

import React from "react";
import { getClassName } from "../../utils/react-utils";
import TableCell from "../table/table-cell";

interface Props {
  amount: number;
  gateway: string;
  currencyCode: string;
}

const TransactionsTableAmount: React.FC<Props> = ({
  amount,
  gateway,
  currencyCode,
}) => {
  const isIncomingTransaction = amount > 0;
  const combinedClassName = getClassName({
    "transactions-table-amount": true,
    "transactions-table-amount-incoming": isIncomingTransaction,
    "transactions-table-amount-outgoing": !isIncomingTransaction,
  });

  return (
    <TableCell className={combinedClassName} label="amount">
      <span className="transactions-table-amount-value">{amount}</span>
      <span className="transactions-table-amount-currency">{currencyCode}</span>
      <span className="transactions-table-amount-gateway">{gateway}</span>
    </TableCell>
  );
};

export default TransactionsTableAmount;
