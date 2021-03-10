const request = (method: string) => {
  const DEFAULT_OPTIONS = {
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  };

  return async function (url: string) {
    const fetchOptions = {
      method,
      ...DEFAULT_OPTIONS,
    };

    const response = await fetch(url, fetchOptions);

    return response.json();
  };
}

const get = request("GET");

export { get };
