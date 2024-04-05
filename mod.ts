/**
 * A small wrapper around `fetch()` for consuming REST+JSON-APIs.
 *
 * @example
 * ```typescript
 * import {
 *   get,
 *   STATUS_CODE,
 * } from "https://deno.land/x/olaven/kall/mod.ts";
 *
 *  * const { status, todo } = await get(
 *   "https://jsonplaceholder.typicode.com/todos/1",
 * );
 *
 * console.log(
 *   status === STATUS_CODE.OK
 *     ? `Fetched Todo: ${todo}`
 *     : `${status} when fetching todo..`,
 * );
 * ```
 * @module
 */

export { del, get, patch, post, put } from "./src/methods.ts";
export { STATUS_CODE } from "./src/codes.ts";
