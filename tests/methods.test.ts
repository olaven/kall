import { assertEquals, assertNotEquals } from "../source/deps.ts";
import { get } from "../source/methods.ts";


const url = "https://api.entur.io/"

Deno.test(
  "Get returns something",
  async () => {

    const returned = await get(url);

    assertNotEquals(returned, null);
    assertNotEquals(returned, undefined);
    assertNotEquals(returned, []);
  }
);

Deno.test(
  "Get returns correct status",
  async () => {

    const [status, body] = await get(url);
    assertEquals(status, 404);
  },
);


