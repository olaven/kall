# Kall 🦜 ![Test](https://github.com/olaven/kall/workflows/Test/badge.svg) 
A small and intuitive wrapper around `fetch` for consuming REST+JSON-APIs.
`kall` is compatible with [Deno](https://deno.land) and [Node](nodejs.org). 

It provides functions for each HTTP Method and an easy API to read their response,
as well as handy constants for different status codes. 

# Documentation 

If you or your company is benefitting from `kall`, consider becoming a [sponsor](github.com/sponsors/olaven/). 
This way I can work on new features and continue to maintain it worry-free. 
## Installation 
* Deno: just use URL's like in examples 
* Node: `yarn add node-kall`


## Basic usage 
```ts
                      //"node-kall" if using Node
import { get, OK } from "https://denopkg.com/olaven/kall@v0.1.71/mod.ts";

// Basic GET                   
const [status, todo] = await get("https://jsonplaceholder.typicode.com/todos/1");

console.log((status === OK) ?
    `Fetched Todo: ${todo}` :
    `${status} when fetching todo..`
); 

```
```ts
                      //"node-kall" if using Node
import { get, OK } from "https://denopkg.com/olaven/kall@v0.1.71/mod.ts";

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

Similarly, the last argument of any function (2nd for `get` and `del`, and 3rd for `put`, `patch` and `post`) takes a `RequestInit`-object, for when you 
need to pass custom headers etc. 

In addition, `kall` provides utility functions for extracting only one of these, e.g.: 
| Name             | Example                                                          |
| ---------------- | ---------------------------------------------------------------- |
| `filterStatus`   | `const status = await filterStatus(post('/api/todos', newTodo))` |
| `filterBody`     | `const body = await filterBody(put('/api/todos', updatedTodo))`  |
| `filterResponse` | `const response = await filterResponse(get('/api/todos'))`       |


## Motivation 
The `fetch`-API is quite straight forward. However, its semantics are confusing. 
> "fetch" 
> 1. to go and bring back; return with; get: 
> _to go up a hill to fetch a pail of water._
> 2. to cause to come; bring: 
> _to fetch a doctor._
> [source](https://www.dictionary.com/browse/fetch)


In a [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)-context, this makes sense for `GET`-methods, but 
it breaks down once you use methods like `POST` and `PATCH`. This causes friction that should usually be avoided. 
Furthermore, `fetch` exposes a lot of data that is not needed. __Most of the time__, the status code and JSON-body of the response 
is what's relevant. `kall` makes the most relevant data available quicky through a very simple API, at the expense of being highly coupled with REST. 
This makes code easier to read and reason through. 

However, "most of the time" is not always. `kall` makes it possible to get the same information as `fetch` would in these situations. 
The difference is that "most of the time" is prioritized. 

Make what you want of this :-) It's just a personal experiment that I want to use and share. 
