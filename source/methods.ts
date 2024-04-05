import { performRequest } from "../source/support.ts";

export const patch = <T, G = T>(
  url: string,
  payload: T,
  init: RequestInit = {},
) => performRequest<T, G>("PATCH", url, payload, init);

export const del = <T, G = T>(url: string, init: RequestInit = {}) =>
  performRequest<T, G>("DELETE", url, null, init);

export const put = <T, G = T>(
  url: string,
  payload: T,
  init: RequestInit = {},
) => performRequest<T, G>("PUT", url, payload, init);

export const post = <T, G = T>(
  url: string,
  payload: T,
  init: RequestInit = {},
) => performRequest<T, G>("POST", url, payload, init);

export const get = <T, G = T>(url: string, init: RequestInit = {}) =>
  performRequest<T, G>("GET", url, null, init);
