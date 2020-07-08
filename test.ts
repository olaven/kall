import { get, OK } from "./mod.ts";

const [status, body, response] = await get(
  "https://jsonplaceholder.typicode.com/posts",
);

console.log(status, body, response);
