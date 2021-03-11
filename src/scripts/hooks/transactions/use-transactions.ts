import * as React from "react";
import { TransactionResponse } from "../../../types/transaction";
import { defaultTransactionsData } from "../../constants";
import { get } from "../../utils/data-utils";

const getTransactionsEndpoint =
  "https://run.mocky.io/v3/3f8acc90-fde9-4c01-8097-880882d90dc0?mocky-delay=5s";

const useTransactions = () => {
  const [serverResponse, setServerResponse] = React.useState<{
    isLoading: boolean;
    data: TransactionResponse;
  }>({
    isLoading: true,
    data: defaultTransactionsData,
  });

  React.useEffect(() => {
    (async () => {
      const data = await get(getTransactionsEndpoint);

      setServerResponse({
        isLoading: false,
        data,
      });
    })();
  }, []);

  return {
    isLoadingTransactions: serverResponse.isLoading,
    transactions: serverResponse.data,
  };
};

export default useTransactions;
