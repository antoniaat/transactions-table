interface Extra {
  id: string;
  payer: string;
  posting_date: string;
  posting_time: string;
  closing_balance: number;
  payer_information: string;
  payer_internal_name: string;
  account_balance_snapshot: number;
  details: string;
}

export interface Transaction {
  id: string;
  account_id: string;
  amount: number;
  currency_code: string;
  description: string;
  category: string;
  gateway: string;
  extra: Extra;
  created_at: string;
  updated_at: string;
}

interface TransactionResponse {
  transactions: Transaction[];
}

export { TransactionResponse };
