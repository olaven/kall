import { KallResponse, performRequest } from "../src/support.ts";

/**
 * `PATCH` method request.
 *
 * @param url
 * @param payload
 * @param init For headers etc.
 * @returns `KallResponse<G>` with status, response-body and full response.
 */
export const patch = <T, G = T>(
  url: string,
  payload: T,
  init: RequestInit = {},
): KallResponse<G> => performRequest<T, G>("PATCH", url, payload, init);

/**
 * `DELETE` method request.
 *
 * @param url
 * @param payload
 * @param init For headers etc.
 * @returns `KallResponse<G>` with status, response-body and full response.
 */
export const del = <T, G = T>(
  url: string,
  init: RequestInit = {},
): KallResponse<G> => performRequest<T, G>("DELETE", url, null, init);

/**
 * `PUT` method request.
 *
 * @param url
 * @param payload
 * @param init For headers etc.
 * @returns `KallResponse<G>` with status, response-body and full response.
 */
export const put = <T, G = T>(
  url: string,
  payload: T,
  init: RequestInit = {},
): KallResponse<G> => performRequest<T, G>("PUT", url, payload, init);

/**
 * `POST` method request.
 *
 * @param url
 * @param payload
 * @param init For headers etc.
 * @returns `KallResponse<G>` with status, response-body and full response.
 */
export const post = <T, G = T>(
  url: string,
  payload: T,
  init: RequestInit = {},
): KallResponse<G> => performRequest<T, G>("POST", url, payload, init);

/**
 * `GET` method request.
 *
 * @param url
 * @param init For headers etc.
 * @returns `KallResponse<G>` with status, response-body and full response.
 */
export const get = <T, G = T>(
  url: string,
  init: RequestInit = {},
): KallResponse<G> => performRequest<T, G>("GET", url, null, init);
