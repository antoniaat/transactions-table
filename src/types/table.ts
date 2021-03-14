import React from "react";
import { Column } from "react-table";
import { Transaction, TransactionResponse } from "./transaction";

interface TableRowProps {
  original: Transaction;
}

type TableCellType = number | string | React.ReactNode;

interface TableCellProps {
  value: TableCellType;
  label: string;
  className?: string;
  row: TableRowProps;
  renderValue?: (arg: TableCellType) => JSX.Element;
}

interface TableProps {
  columns: Column<Transaction>[];
  data: TransactionResponse;
}

export type { TableCellProps, TableProps, TableRowProps, TableCellType };
