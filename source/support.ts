import { STATUS_CODE } from "../mod.ts";

const applicationTypeIsJson = (headers: Headers): boolean =>
  !!headers.get("content-type")?.toLowerCase().includes("application/json");

type Method = "GET" | "PUT" | "PATCH" | "DELETE" | "POST";
type EnumValues<T> = T[keyof T];
export type KallResponse<R> = Promise<
  { status: EnumValues<typeof STATUS_CODE>; body: R | null; response: Response }
>;

type Fetch = typeof fetch;
const supportedFetch: Fetch =
  (typeof window !== "undefined" || typeof Deno !== "undefined")
    ? fetch // @ts-ignore To make compatiable with Node.js
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

  return { status: response.status, body: parsedBody, response };
};
