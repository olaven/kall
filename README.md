# Kall 🦜
A small and intuitive wrapper around `fetch` for consuming REST+JSON-APIs.
`Kall` is compatible with [Deno](https://deno.land). Node support is planned. 

It provides functions for each HTTP Method and an easy API to read their response. 
As well as provides handy constants for different status codes. 

## Basic usage 
```ts
import { get, OK } from "https://denopkg.com/olaven/kall";

// Basic GET 
const [status, todo] = await get("https://jsonplaceholder.typicode.com/todos/1");

console.log((status === OK) ?
    `Fetched Todo: ${todo}` :
    `${status} when fetching todo..`
); 

```
```ts
import { get, OK } from "https://denopkg.com/olaven/kall";

// Same as previous example, but with types
type Todo = { userId: number, id: number, title: string, completed: boolean }; //define the type the server is expected to return 
const [status, todo] = await get<Todo>("https://jsonplaceholder.typicode.com/todos/1"); // pass as generic 

console.log((status === OK) ?
    `Fetched Todo: ${todo}` :
    `${status} when fetching todo..`
); 
```

Every function (`get`, `put`, `patch`, `del`, `post`) returns the same format: `[ status, body, response]`.  
* `status`: is the status code. 
* `body`: is the JSON-object the API returns (if any) 
* `response`: is the response `fetch` would have returned, for when you need it

In addition, `Kall` provides utility functions for extracting only one of these, e.g.: 
| Name      | Example |
| ----------- | ----------- |
| `filterStatus`      | `const status = await filterStatus(post('/api/todos', newTodo))`        | 
| `filterBody`      | `const body = await filterBody(put('/api/todos', updatedTodo))` | 
| `filterResponse`      | `const response = await filterResponse(get('/api/todos'))`   | 


## Motivation 
The `feth`-API is quite straight forward. However, its semantics are confusing. 
> "fetch" [source](https://www.dictionary.com/browse/fetch)
> 1. to go and bring back; return with; get: 
> _to go up a hill to fetch a pail of water._
> 2. to cause to come; bring: 
> _to fetch a doctor._


In a [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)-context, this makes sense for `GET`-methods, but 
it breaks down once you use methods like `POST` and `PATCH`. This causes friction that should usually be avoided. 
Furthermore, `fetch` exposes a lot of data that is not needed. __Most of the time__, the status code and JSON-body of the response 
is what's relevant. `Kall` makes the most relevant data available quicky, through a very simple API that is highly coupled with 
REST. This makes code easier to read and reason through. 

However, "most of the time" is not always. `Kall` makes it possible to get the same information as `fetch` would in these situations. 
The difference is that "most of the time" is prioritized. 

Make what you want of this :-) It's just a personal experiment that I want to use and share. 