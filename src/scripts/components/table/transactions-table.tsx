import "../../../styles/components/table/transactions-table.scss";

import { useMemo } from "react";
import { Cell, Column } from "react-table";
import useTransactions from "../../hooks/transactions/use-transactions";
import { Transaction } from "../../../types/transaction";
import DataLoadingContext from "../contexts/data-loading-context";
import ContentLoading from "../content-loading";
import TransactionsTableGateway from "./transactions-table-gateway";
import TransactionsTableAmount from "./transactions-table-amount";
import TransactionsTableDate from "./transactions-table-date";
import TransactionsTableCategory from "./transactions-table-category";
import Table from "./index";

const TransactionsTable = () => {
  const { isLoadingTransactions, transactions } = useTransactions();

  const sourceColumn: Column<Transaction> = {
    Header: <ContentLoading text="Source" isLoading={isLoadingTransactions} />,
    accessor: "description",
    Cell: (props: Cell<Transaction>) => (
      <TransactionsTableGateway 
      description={props.row.original.description}
      gateway={props.row.original.gateway} />
    ),
  };

  const categoryColumn: Column<Transaction> = {
    Header: (
      <ContentLoading text="Category" isLoading={isLoadingTransactions} />
    ),
    accessor: "category",
    Cell: (props: Cell<Transaction>) => (
      <TransactionsTableCategory category={props.row.original.category} />
    ),
  };

  const amountColumn: Column<Transaction> = {
    Header: <ContentLoading text="Amount" isLoading={isLoadingTransactions} />,
    accessor: "amount",
    Cell: (props: Cell<Transaction>) => (
      <TransactionsTableAmount
        gateway={props.row.original.gateway}
        amount={props.row.original.amount}
        currencyCode={props.row.original.currency_code}
      />
    ),
  };

  const dateColumn: Column<Transaction> = {
    Header: <ContentLoading text="Date" isLoading={isLoadingTransactions} />,
    accessor: "updated_at",
    Cell: (props: Cell<Transaction>) => (
      <TransactionsTableDate dateString={props.row.original.updated_at} />
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
