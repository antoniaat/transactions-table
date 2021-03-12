import "../../../styles/components/table/transactions-table.scss";

import React, { useMemo } from "react";
import { Column } from "react-table";
import { TableCell as TableCellProps } from "../../../types/table";
import { Transaction } from "../../../types/transaction";
import useTransactions from "../../hooks/transactions/use-transactions";
import ContentLoading from "../content-loading";
import TableCell from "./table-cell";
import Table from ".";
import DataLoadingContext from "../contexts/data-loading-context";

const TransactionsTable = () => {
  const { isLoadingTransactions, transactions } = useTransactions();

  const sourceColumn: Column<Transaction> = {
    Header: <ContentLoading text="Source" isLoading={isLoadingTransactions} />,
    accessor: 'description',
    Cell: (props: TableCellProps) => {
      const { gateway, description } = props.row.original;

      return (
          <TableCell {...props} label="source">
            {gateway}
            {description}
          </TableCell>
      )
    }
  };

  const categoryColumn: Column<Transaction> = {
    Header: (
      <ContentLoading text="Category" isLoading={isLoadingTransactions} />
    ),
    accessor: "category",
    Cell: (props: TableCellProps) => <TableCell {...props} label="category" />,
  };

  const amountColumn: Column<Transaction> = {
    Header: <ContentLoading text="Amount" isLoading={isLoadingTransactions} />,
    accessor: "amount",
    Cell: (props: TableCellProps) => <TableCell {...props} label="amount" />,
  };

  const dateColumn: Column<Transaction> = {
    Header: <ContentLoading text="Date" isLoading={isLoadingTransactions} />,
    accessor: "created_at",
    Cell: (props: TableCellProps) => <TableCell {...props} label="date" />,
  };

  const columns = useMemo(
    () => [sourceColumn, categoryColumn, amountColumn, dateColumn],
    [isLoadingTransactions]
  );

  const memoizedTransactions = useMemo(() => transactions, [transactions]);

  return (
    <DataLoadingContext.Provider value={{ isLoadingTransactions }}>
      <section className="transactions-table">
        <Table columns={columns} data={memoizedTransactions} />
      </section>
    </DataLoadingContext.Provider>
  );
};

export default TransactionsTable;
