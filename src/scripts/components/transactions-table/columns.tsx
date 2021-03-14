import { Cell, Column } from "react-table";
import { Transaction } from "../../types/transaction";
import ContentLoading from "../content-loading";
import TransactionsTableAmount from "./transactions-table-amount";
import TransactionsTableCategory from "./transactions-table-category";
import TransactionsTableDate from "./transactions-table-date";
import TransactionsTableGateway from "./transactions-table-gateway";

export const getColumnsConfig = (isLoading: boolean):Column<Transaction>[] => {
  return [
    {
      Header: <ContentLoading text="Source" isLoading={isLoading} />,
      accessor: "description",
      Cell: (props: Cell<Transaction>) => (
        <TransactionsTableGateway
          description={props.row.original.description}
          gateway={props.row.original.gateway}
        />
      ),
    },
    {
      Header: <ContentLoading text="Category" isLoading={isLoading} />,
      accessor: "category",
      Cell: (props: Cell<Transaction>) => (
        <TransactionsTableCategory category={props.row.original.category} />
      ),
    },
    {
      Header: <ContentLoading text="Amount" isLoading={isLoading} />,
      accessor: "amount",
      Cell: (props: Cell<Transaction>) => (
        <TransactionsTableAmount
          gateway={props.row.original.gateway}
          amount={props.row.original.amount}
          currencyCode={props.row.original.currency_code}
        />
      ),
    },
    {
      Header: <ContentLoading text="Date" isLoading={isLoading} />,
      accessor: "updated_at",
      Cell: (props: Cell<Transaction>) => (
        <TransactionsTableDate dateString={props.row.original.updated_at} />
      ),
    },
  ];
};
