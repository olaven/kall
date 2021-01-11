export function get<T, R = T>(
  url: string,
  init?: RequestInit
): Promise<[number, R, Response]>;
export function post<T, R = T>(
  url: string,
  payload: T,
  init?: RequestInit
): Promise<[number, R, Response]>;
export function patch<T, R = T>(
  url: string,
  payload: T,
  init?: RequestInit
): Promise<[number, R, Response]>;
export function del<T, R = T>(
  url: string,
  init?: RequestInit
): Promise<[number, R, Response]>;
export function put<T, R = T>(
  url: string,
  payload: T,
  init?: RequestInit
): Promise<[number, R, Response]>;

export function filterStatus(
  caller: Promise<[number, any, Response]>
): Promise<number>;
export function filterBody<R>(
  caller: Promise<[number, R | null, Response]>
): Promise<R>;
export function filterResponse(
  caller: Promise<[number, any, Response]>
): Promise<Response>;

export const CONTINUE: number;
export const SWITCHING_PROTOCOL: number;
export const PROCESSING: number;
export const EARLY_HINTS: number;
export const OK: number;
export const CREATED: number;
export const ACCEPTED: number;
export const NON_AUTHORATIVE_INFORMATION: number;
export const NO_CONTENT: number;
export const RESET_CONNECTION: number;
export const PARTIAL_CONTENT: number;
export const MULTI_STATUS: number;
export const ALREADY_REPORTED: number;
export const IM_USED: number;
export const MOVED_PERMANENTLY: number;
export const FOUND: number;
export const SEE_OTHER: number;
export const NOT_MODIFIED: number;
export const TEMPORARY_REDIRECT: number;
export const PERMANENT_REDIRECT: number;
export const BAD_REQUEST: number;
export const UNAUTHORIZED: number;
export const PAYMENT_REQUIRED: number;
export const FORBIDDEN: number;
export const NOT_FOUND: number;
export const METHOD_NOT_ALLOWED: number;
export const NOT_ACCEPTABLE: number;
export const PROXY_AUTHENTICATION_REQUIRED: number;
export const REQUEST_TIMEOUT: number;
export const CONFLICT: number;
export const GONE: number;
export const LENGTH_REQUIRED: number;
export const PRECONDITION_FAILED: number;
export const PAYLOAD_TOO_LARGE: number;
export const URI_TOO_LONG: number;
export const UNSUPPORTED_MEDIA_TYPE: number;
export const RANGE_NOT_SATISFIABLE: number;
export const EXPECTATION_FAILED: number;
export const IM_A_TEAPOT: number;
export const MISDIRECTED_REQUEST: number;
export const UNPROCESSABLE_ENTITY: number;
export const LOCKED: number;
export const FAILED_DEPENDENCY: number;
export const TOO_EARLY: number;
export const UPGRADE_REQUIRED: number;
export const PRECONDITION_REQUIRED: number;
export const TOO_MAY_REQUESTS: number;
export const REQUEST_HEADER_FIELDS_TOO_LARGE: number;
export const UNAVAILABLE_FOR_LEGAL_REASONS: number;
export const INTERNAL_SERVER_ERROR: number;
export const NOT_IMPLEMENTED: number;
export const BAD_GATEWAY: number;
export const SERVICE_UNAVAILABLE: number;
export const GATEWAY_TIMEOUT: number;
export const HTTP_VERSION_NOT_SUPPORTED: number;
export const VARIANT_ALSO_NEGOTIATES: number;
export const INSUFFICIENT_STORAGE: number;
export const LOOP_DETECTED: number;
export const NOT_EXTENDED: number;
export const NETWORK_AUTHENTICATION_REQUIRED: number;

