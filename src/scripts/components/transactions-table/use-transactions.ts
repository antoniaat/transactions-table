import { useState, useEffect } from "react";
import { TransactionResponse } from "../../types/transaction";
import { defaultTransactionsData } from "../../constants";
import { get } from "../../utils/data-utils";

const getTransactionsEndpoint =
  "https://run.mocky.io/v3/3f8acc90-fde9-4c01-8097-880882d90dc0?mocky-delay=5s";

interface ServerResponseProps {
  isLoading: boolean;
  data: TransactionResponse;
}

const useTransactions = () => {
  const [serverResponse, setServerResponse] = useState<ServerResponseProps>({
    isLoading: true,
    data: defaultTransactionsData,
  });

  useEffect(() => {
    const getData = async () => {
      const data = await get(getTransactionsEndpoint);

      setServerResponse({
        isLoading: false,
        data,
      });
    };

    getData();
  }, []);

  const {
    isLoading: isLoadingTransactions,
    data: transactions,
  } = serverResponse;

  return {
    isLoadingTransactions,
    transactions,
  };
};

export default useTransactions;
