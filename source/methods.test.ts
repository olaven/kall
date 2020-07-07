import { assertNotEquals, encode, serve } from "../deps.ts";
import { get, post, put, patch, del } from "./methods.ts";

const { test } = Deno;

const listenTo = async (server: any) => {
  for await (const req of server) {
    req.respond({ body: "Hello World\n" });
  }
};

const withServer = ((action: (url: string) => any) =>
  async () => {
    const port = Math.floor(Math.random() * 9000) + 1;
    const url = `http://localhost:${port}/`;

    const server = serve({ port });

    listenTo(server);

    await action(url);
    await server.close();
  });

test(
  "Get returns something",
  withServer(async (url) => {
    const returned = await get(url);

    assertNotEquals(returned, null);
    assertNotEquals(returned, undefined);
    assertNotEquals(returned, []);

    await returned[2].arrayBuffer();
  }),
);
