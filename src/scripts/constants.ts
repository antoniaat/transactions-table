import { TransactionResponse } from "./types/transaction";

const emptyTransaction = {
  id: "",
  account_id: "",
  amount: 0,
  currency_code: "",
  description: "",
  category: "",
  gateway: "",
  extra: {
    id: "",
    payer: "",
    posting_date: "",
    posting_time: "",
    closing_balance: 0,
    payer_information: "",
    payer_internal_name: "",
    account_balance_snapshot: 0,
    details: "",
  },
  created_at: null,
  updated_at: null,
}

const defaultTransactionsData: TransactionResponse = {
  transactions: new Array(5).fill(emptyTransaction),
};

export { defaultTransactionsData }
