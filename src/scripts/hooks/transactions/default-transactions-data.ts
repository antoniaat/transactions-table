import { fillArrayWithObjects } from "../../utils/utils";

const defaltTransactionData = [
  {
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
    created_at: "",
    updated_at: "",
  },
];

const defaultTransactionsData = {
    id: 0,
    transactions: fillArrayWithObjects(defaltTransactionData, 10, (transaction: Object, i: number) => ({
        ...transaction,
        id: i,
    })),
};

export default defaultTransactionsData;
