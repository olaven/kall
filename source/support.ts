const applicationTypeIsJson = (headers: Headers): boolean =>
  !!headers.get("content-type")?.toLowerCase().includes("application/json");

type Method = "GET" | "PUT" | "PATCH" | "DELETE" | "POST";
export type KallResponse<R> = Promise<[number, R | null, Response]>;

const supportedFetch =
  (typeof window !== "undefined" || typeof Deno !== "undefined")
    ? fetch //@ts-ignore
    : require("node-fetch");

export const performRequest = async <T, R>(
  method: Method,
  url: string,
  requestBody: T | null,
  requestInit: RequestInit,
): KallResponse<R> => {
  const response = await supportedFetch(url, {
    method,
    body: requestBody ? JSON.stringify(requestBody) : null,
    headers: {
      "Content-Type": "application/json",
      ...requestInit.headers,
    },
    ...requestInit,
  });

  const parsedBody = applicationTypeIsJson(response.headers)
    ? await response.json() as R
    : null;

  await response.body?.cancel();

  return [response.status, parsedBody, response];
};
