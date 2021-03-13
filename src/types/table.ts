import React from "react";
import { Column } from "react-table";
import { Transaction, TransactionResponse } from "./transaction";

interface RowOriginal {
  original: Transaction;
}

type TableCellValue = number | string | React.ReactNode;

interface TableCell {
  value: TableCellValue;
  label: string;
  className?: string;
  row: RowOriginal;
  renderValue: (arg: TableCellValue) => JSX.Element;
}

interface Table {
  columns: Column<Transaction>[];
  data: TransactionResponse;
}

export type { TableCell, Table, 
   TableCellValue };
