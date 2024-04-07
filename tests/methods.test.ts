import { assertNotEquals } from "$std/assert/assert_not_equals.ts";
import { assertEquals } from "$std/assert/assert_equals.ts";
import { get } from "../src/methods.ts";

const url = "https://api.entur.io/";

Deno.test("Get returns something", async () => {
  const returned = await get(url);

  assertNotEquals(returned, null);
  assertNotEquals(returned, undefined);
});

Deno.test("Get returns correct status", async () => {
  const { status } = await get(url);
  assertEquals(status, 404);
});
