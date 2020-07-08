import { performRequest } from "./support.ts";

export const patch = async <T>(url: string, payload: T) =>
  performRequest<T>("PATCH", url, payload);

export const del = async <T>(url: string) =>
  performRequest<T>("DELETE", url, null);

export const put = async <T>(url: string, payload: T) =>
  performRequest<T>("PUT", url, payload);

export const post = async <T>(url: string, payload: T) =>
  performRequest<T>("DELETE", url, payload);

export const get = async <T>(url: string) =>
  performRequest<T>("GET", url, null);
