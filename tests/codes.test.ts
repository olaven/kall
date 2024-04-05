import { STATUS_CODE } from "../source/codes.ts";
import { assertEquals } from "$std/assert/assert_equals.ts";

Deno.test("Some random codes", () => {
  assertEquals(508, STATUS_CODE.LOOP_DETECTED);
  assertEquals(428, STATUS_CODE.PRECONDITION_REQUIRED);
  assertEquals(418, STATUS_CODE.IM_A_TEAPOT);
  assertEquals(416, STATUS_CODE.RANGE_NOT_SATISFIABLE);
  assertEquals(414, STATUS_CODE.URI_TOO_LONG);
  assertEquals(303, STATUS_CODE.SEE_OTHER);
});
