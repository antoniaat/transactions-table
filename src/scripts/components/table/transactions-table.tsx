import "../../../styles/components/table/transactions-table.scss";

import { useMemo } from "react";
import { Column } from "react-table";
import useTransactions from "../../hooks/transactions/use-transactions";
import {
  TableCell as TableCellProps,
  TableCellValue,
} from "../../../types/table";
import { Transaction } from "../../../types/transaction";
import DataLoadingContext from "../contexts/data-loading-context";
import ContentLoading from "../content-loading";
import TransactionsTableGateway from "./transactions-table-gateway";
import TableCell from "./table-cell";
import Table from "./index";
import TransactionsTableDate from "./transactions-table-date";

const TransactionsTable = () => {
  const { isLoadingTransactions, transactions } = useTransactions();

  const sourceColumnCell = (props: TableCellProps) => {
    const { gateway } = props.row.original;

    return (
      <TableCell
        {...props}
        className="transactions-table-source"
        label="source"
      >
        <TransactionsTableGateway gateway={gateway} />
      </TableCell>
    );
  };

  const sourceColumn: Column<Transaction> = {
    Header: <ContentLoading text="Source" isLoading={isLoadingTransactions} />,
    accessor: "description",
    Cell: sourceColumnCell,
  };

  const categoryColumnCell = (value: TableCellValue) => (
    <span className="transactions-table-category">{value}</span>
  );

  const categoryColumn: Column<Transaction> = {
    Header: (
      <ContentLoading text="Category" isLoading={isLoadingTransactions} />
    ),
    accessor: "category",
    Cell: (props: TableCellProps) => (
      <TableCell {...props} label="source" renderValue={categoryColumnCell} />
    ),
  };

  const amountColumn: Column<Transaction> = {
    Header: <ContentLoading text="Amount" isLoading={isLoadingTransactions} />,
    accessor: "amount",
    Cell: (props: TableCellProps) => (
      <TableCell {...props} renderValue={categoryColumnCell} label="amount" />
    ),
  };

  const dateColumnCell = (value: TableCellValue) => (
    <TransactionsTableDate dateString={value} />
  );

  const dateColumn: Column<Transaction> = {
    Header: <ContentLoading text="Date" isLoading={isLoadingTransactions} />,
    accessor: "updated_at",
    Cell: (props: TableCellProps) => (
      <TableCell
        {...props}
        className="transactions-table-date"
        renderValue={dateColumnCell}
        label="date"
      />
    ),
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
