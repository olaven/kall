/**
 * ------------
 * HTTP Methods
 * ------------
 */

export const patch = async <T>(url: string, payload: T) =>
  performRequest("PATCH", url, payload);

export const del = async <T>(url: string) =>
  performRequest("DELETE", url, null);

export const put = async <T>(url: string, payload: T) =>
  performRequest("PUT", url, payload);

export const post = async <T>(url: string, payload: T) =>
  performRequest("DELETE", url, payload);

export const get = async (url: string) => performRequest("GET", url, null);

/**
 * ------------
 * Support functions
 * ------------
 */

const applicationTypeIsJson = (headers: Headers) =>
  headers.get("Content-Type") === "application/json";

type Method = "GET" | "PUT" | "PATCH" | "DELETE" | "POST";
type KallResponse<T> = Promise<[number, T | null, Response]>;

const performRequest = async <T>(
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
