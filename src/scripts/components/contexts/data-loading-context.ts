import { createContext } from "react";

const defaultServiceContextValue = { isLoadingTransactions: true };

const DataLoadingContext = createContext(defaultServiceContextValue);

export default DataLoadingContext;
