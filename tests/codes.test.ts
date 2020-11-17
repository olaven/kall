import { IM_A_TEAPOT, LOOP_DETECTED, PRECONDITION_REQUIRED, RANGE_NOT_SATISFIABLE, SEE_OTHER, URI_TOO_LONG } from "../source/codes.ts";
import { assertEquals } from "../source/deps.ts";
const { test } = Deno;

test("Some random codes", () => {

    assertEquals(508, LOOP_DETECTED);
    assertEquals(428, PRECONDITION_REQUIRED);
    assertEquals(418, IM_A_TEAPOT);
    assertEquals(416, RANGE_NOT_SATISFIABLE);
    assertEquals(414, URI_TOO_LONG);
    assertEquals(303, SEE_OTHER);
});