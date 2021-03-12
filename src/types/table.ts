import { Column } from "react-table";
import { Transaction, TransactionResponse } from "./transaction";

interface RowOriginal {
  original: Transaction
}

interface TableCell {
  value: number | string;
  label: string;
  row: RowOriginal
}

interface Table {
  columns: Column<Transaction>[];
  data: TransactionResponse;
}

export type { TableCell, Table };
