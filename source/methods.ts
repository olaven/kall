import { performRequest } from "../source/support.ts";

export const patch = async <T, G = T>(
  url: string,
  payload: T,
  init: RequestInit = {},
) => performRequest<T, G>("PATCH", url, payload, init);

export const del = async <T, G = T>(url: string, init: RequestInit = {}) =>
  performRequest<T, G>("DELETE", url, null, init);

export const put = async <T, G = T>(url: string, payload: T, init: RequestInit = {}) =>
  performRequest<T, G>("PUT", url, payload, init);

export const post = async <T, G = T>(
  url: string,
  payload: T,
  init: RequestInit = {},
) => performRequest<T, G>("POST", url, payload, init);

export const get = async <T, G = T>(url: string, init: RequestInit = {}) =>
  performRequest<T, G>("GET", url, null, init);
