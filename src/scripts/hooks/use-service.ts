import { useState, useEffect, useCallback } from "react";

const useService = (
  endpointMethod: () => any,
  defaultData: Array<Object> | Object = []
) => {
  const [serverResponse, setServerResponse] = useState({
    isLoading: true,
    data: defaultData,
  });

  const getData = useCallback(async () => {
    const data = await endpointMethod();

    setServerResponse({
      isLoading: false,
      data,
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return { ...serverResponse };
};

export default useService;
