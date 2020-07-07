import { assertEquals, assertNotEquals, encode, serve } from "../deps.ts";
import { get, post, put, patch, del } from "./methods.ts";

const { test } = Deno;

const listenTo = async (mockOptions: MockOptions, server: any) => {
  for await (const req of server) {
    req.respond(mockOptions);
  }
};

type MockOptions = {
  status: number | undefined;
  headers?: Headers;
  body?: any;
};

const withServer =
  ((mockOptions: MockOptions, action: (url: string) => any) =>
    async () => {
      const port = Math.floor(Math.random() * 9000) + 1;
      const url = `http://localhost:${port}/`;

      const server = serve({ port });

      listenTo(mockOptions, server);

      await action(url);
      await server.close();
    });

//https://github.com/denoland/deno/issues/4735
const handleResponse = async (response: Response) => {
  await response.arrayBuffer();
};

test(
  "Get returns something",
  withServer({ status: 200 }, async (url) => {
    const returned = await get(url);

    assertNotEquals(returned, null);
    assertNotEquals(returned, undefined);
    assertNotEquals(returned, []);

    await handleResponse(returned[2]);
  }),
);

test(
  "Get returns correct status",
  withServer(
    { status: 200 },
    async (url) => {
      const [status] = await get(url);
      assertEquals(status, 200);
    },
  ),
);

test(
  "GET returs parsed JSON if content-type is set to application/json",
  withServer({
    status: 200,
    body: JSON.stringify({ key: "value" }),
    headers: new Headers([["Content-Type", "application/json"]]),
  }, async (url) => {
    const [status, body] = await get(url);
    assertEquals(body, { key: "value" });
  }),
);
