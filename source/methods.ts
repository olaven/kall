import { performRequest } from "./support.ts";

export const patch = async <T>(url: string, payload: T) =>
  performRequest("PATCH", url, payload);

export const del = async <T>(url: string) =>
  performRequest("DELETE", url, null);

export const put = async <T>(url: string, payload: T) =>
  performRequest("PUT", url, payload);

export const post = async <T>(url: string, payload: T) =>
  performRequest("DELETE", url, payload);

export const get = async (url: string) => performRequest("GET", url, null);
