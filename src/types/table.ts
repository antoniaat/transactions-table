import { Column } from "react-table";
import { Transaction, TransactionResponse } from "./transaction";

interface TableCell {
  value: number | string;
  label: string;
}

interface Table {
  columns: Column<Transaction>[];
  data: TransactionResponse;
}

export type { TableCell, Table };
