const applicationTypeIsJson = (headers: Headers) =>
  headers.get("content-type")?.toLowerCase().includes("application/json") ||
  headers.get("Content-Type")?.toLowerCase().includes("application/json");

type Method = "GET" | "PUT" | "PATCH" | "DELETE" | "POST";
export type KallResponse<T> = Promise<[number, T | null, Response]>;

export const performRequest = async <T>(
  method: Method,
  url: string,
  requestBody: T | null,
): KallResponse<T> => {
  const response = await fetch(url, {
    method,
    body: requestBody ? JSON.stringify(requestBody) : null,
  });

  const parsedBody = applicationTypeIsJson(response.headers)
    ? await response.json()
    : null;

  return [response.status, parsedBody, response];
};
