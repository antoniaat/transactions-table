import * as React from "react";
import useTransactions from "../../hooks/transactions/use-transactions";
import TransactionsService from "../../services/transactions/transactions-service";

const TransactionsTable = () => {
  const transactionsService = new TransactionsService();
  const data = useTransactions(transactionsService)

  return (
    <>
      <h1>test</h1>
    </>
  );
};

export default TransactionsTable;
