import "../../../styles/components/table/transactions-table-amount.scss";

import React from "react";
import { getClassName } from "../../utils/react-utils";

interface Props {
  amount: number;
  currencyCode: string;
}

const TransactionsTableAmount: React.FC<Props> = ({ amount, currencyCode }) => {
  const isIncomingTransaction = amount > 0;
  const combinedClassName = getClassName({
    "transactions-table-amount": true,
    "transactions-table-amount-incoming": isIncomingTransaction,
    "transactions-table-amount-outgoing": !isIncomingTransaction,
  });

  return (
    <article className={combinedClassName}>
      <span className="transactions-table-amount-value">{amount}</span>
      <span className="transactions-table-amount-currency">{currencyCode}</span>
    </article>
  );
};

export default TransactionsTableAmount;
