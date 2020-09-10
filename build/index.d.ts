export function get<T>(
  url: string,
  init?: RequestInit
): Promise<[number, T, Response]>;
export function post<T>(
  url: string,
  payload: T,
  init?: RequestInit
): Promise<[number, T, Response]>;
export function patch<T>(
  url: string,
  payload: T,
  init?: RequestInit
): Promise<[number, T, Response]>;
export function del<T>(
  url: string,
  init?: RequestInit
): Promise<[number, T, Response]>;
export function put<T>(
  url: string,
  payload: T,
  init?: RequestInit
): Promise<[number, T, Response]>;

export function filterStatus(
  caller: Promise<[number, any, Response]>
): Promise<number>;
export function filterBody<T>(
  caller: Promise<[number, T | null, Response]>
): Promise<T>;
export function filterResponse(
  caller: Promise<[number, any, Response]>
): Promise<Response>;

export const OK: number;
export const CREATED: number;
export const NO_CONTENT: number;
export const MOVED_PERMANENTLY: number;
export const BAD_REQUEST: number;
export const UNAUTHORIZED: number;
export const FORBIDDEN: number;
export const NOT_FOUND: number;
export const CONFLICT: number;
export const INTERNAL_SERVER_ERROR: number;
export const NOT_IMPLEMENTED: number;
