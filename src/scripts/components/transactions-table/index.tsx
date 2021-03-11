import React, { useMemo } from "react";
import { Column } from "react-table";
import { TableCell as TableCellProps } from "../../../types/table";
import { Transaction } from "../../../types/transaction";
import useTransactions from "../../hooks/transactions/use-transactions";
import Table from "../table";
import TableCell from "../table/table-cell";

const TransactionsTable = () => {
  const { isLoadingTransactions, transactions } = useTransactions();

  const sourceColumn: Column<Transaction> = {
    Header: "Source",
    accessor: "description",
    Cell: (props: TableCellProps) => <TableCell {...props} label="source" />,
  };

  const categoryColumn: Column<Transaction> = {
    Header: "Category",
    accessor: "category",
    Cell: (props: TableCellProps) => <TableCell {...props} label="category" />,
  };

  const amountColumn: Column<Transaction> = {
    Header: "Amount",
    accessor: "amount",
    Cell: (props: TableCellProps) => <TableCell {...props} label="amount" />,
  };

  const dateColumn: Column<Transaction> = {
    Header: "Date",
    accessor: "created_at",
    Cell: (props: TableCellProps) => <TableCell {...props} label="date" />,
  };

  const columns = useMemo(
    () => [sourceColumn, categoryColumn, amountColumn, dateColumn],
    [isLoadingTransactions]
  );

  const memoizedTransactions = useMemo(() => transactions, [transactions]);

  return <Table columns={columns} data={memoizedTransactions} />;
};

export default TransactionsTable;
