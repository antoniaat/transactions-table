import React from "react";
import { Column } from "react-table";
import { Transaction, TransactionResponse } from "./transaction";

interface TableRowProps {
  original: Transaction;
}

type TableCellValue = number | string | React.ReactNode;

interface TableCellProps {
  value: TableCellValue;
  label: string;
  className?: string;
  row: TableRowProps;
  renderValue?: (arg: TableCellValue) => JSX.Element;
}

interface Table {
  columns: Column<Transaction>[];
  data: TransactionResponse;
}

export type { TableCellProps, Table, TableRowProps, TableCellValue };
