import "../../../styles/components/transactions-table/transactions-table.scss";

import { useMemo } from "react";
import DataLoadingContext from "../contexts/data-loading-context";
import Table from "../table/index";
import useTransactions from "./use-transactions";
import { getColumnsConfig } from "./transactions-table-columns";

const TransactionsTable = () => {
  const { isLoadingTransactions, transactions } = useTransactions();

  const columns = useMemo(() => getColumnsConfig(isLoadingTransactions), [
    isLoadingTransactions,
  ]);

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
