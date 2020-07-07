import { assertEquals, assertNotEquals } from "../deps.ts";
import { status, body, response } from "./filters.ts";
import { KallResponse } from "./support.ts";

const { test } = Deno;

const result = async (
  status: number,
  body: any,
  response: any,
): KallResponse<any> => [status, body, response as Response];

test("`status` returns the status code", async () => {
  const retrieved = await status(result(200, {}, {}));
  assertEquals(retrieved, 200);
});

test("`status` returns another status code", async () => {
  const retrieved = await status(result(204, {}, {}));
  assertEquals(retrieved, 204);
});

test("`body` returns the body", async () => {
  const retrieved = await body(result(200, { key: "value" }, {}));
  assertEquals(retrieved, { key: "value" });
});

test("`body` returns the body even if it's null", async () => {
  const retrieved = await body(result(200, null, {}));
  assertEquals(retrieved, null);
});

test("`response` returns the raw response value", async () => {
  const bodyValue = "Some body value";
  const retrieved = await response(result(200, null, { body: bodyValue }));
  assertEquals(retrieved, { body: bodyValue });
});
