import { useCallback } from "react";
import useService from "../use-service";
import defaultTransactions from "./default-transactions-data";

const useTransactions = (service: any) => {
  const endpoint = useCallback(() => service.getAll(), [service]);

  const { isLoading, data } = useService(endpoint, defaultTransactions);

  return {
    isLoadingTransactions: isLoading,
    transactions: data,
  };
};

export default useTransactions;
