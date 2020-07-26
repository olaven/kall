import { performRequest } from "../source/support.ts";

export const patch = async <T>(
  url: string,
  payload: T,
  init: RequestInit = {},
) => performRequest<T>("PATCH", url, payload, init);

export const del = async <T>(url: string, init: RequestInit = {}) =>
  performRequest<T>("DELETE", url, null, init);

export const put = async <T>(url: string, payload: T, init: RequestInit = {}) =>
  performRequest<T>("PUT", url, payload, init);

export const post = async <T>(
  url: string,
  payload: T,
  init: RequestInit = {},
) => performRequest<T>("DELETE", url, payload, init);

export const get = async <T>(url: string, init: RequestInit = {}) =>
  performRequest<T>("GET", url, null, init);
