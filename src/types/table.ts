import React from "react";
import { Cell, Column, Row } from "react-table";
import { Transaction, TransactionResponse } from "./transaction";

interface TableRowProps {
  original: Transaction;
}

type TableCellType = number | string | React.ReactNode;

interface TableCellProps {
  label: string;
  className?: string;
  value?: TableCellType;
  row?: Row;
  renderValue?: (arg: TableCellType) => JSX.Element;
}

interface TableProps {
  columns: Column<Transaction>[];
  data: TransactionResponse;
}

export type { TableCellProps, TableProps, TableRowProps, TableCellType };
