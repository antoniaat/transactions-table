import "../../../styles/components/table/transactions-table.scss";

import { useMemo } from "react";
import { Column } from "react-table";
import useTransactions from "../../hooks/transactions/use-transactions";
import { TableCell as TableCellProps } from "../../../types/table";
import { Transaction } from "../../../types/transaction";
import DataLoadingContext from "../contexts/data-loading-context";
import ContentLoading from "../content-loading";
import TransactionsTableGateway from "./transactions-table-gateway";
import TableCell from "./table-cell";
import Table from "./index";

const TransactionsTable = () => {
  const { isLoadingTransactions, transactions } = useTransactions();

  const sourceColumnCell = (props: TableCellProps) => {
    const { gateway } = props.row.original;

    return (
      <TableCell {...props} className="transactions-table-source" label="source">
        <TransactionsTableGateway gateway={gateway} />
      </TableCell>
    );
  };

  const sourceColumn: Column<Transaction> = {
    Header: <ContentLoading text="Source" isLoading={isLoadingTransactions} />,
    accessor: "description",
    Cell: sourceColumnCell,
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
