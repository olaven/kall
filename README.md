# Kall  
A small and intuitive wrapper around `fetch` for consuming REST+JSON/API-s.
Kall is compatible with [Deno](https://deno.land). Node support is planned. 

## Basic usage 


## Motivation 
The `feth`-API is quite straight forward. However, its semantics are confusing. 
> "fetch"
> 1. to go and bring back; return with; get: 
> _to go up a hill to fetch a pail of water._
> 2. to cause to come; bring: 
> _to fetch a doctor._

[source](https://www.dictionary.com/browse/fetch)

In a [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)-context, this makes sense for `GET`-methods, but 
it breaks down once you use methods like `POST` and `PATCH`. This causes friction that should usually be avoided. 
Furthermore, `fetch` exposes a lot of data that is not needed. __Most of the time__, the status code and JSON-body of the response 
is what's relevant. Kall makes the most relevant data available quicky, through a very simple API that is highly coupled with 
REST. This makes code easier to read and reason through. 

However, "most of the time" is not always. Kall makes it possible to get the same information as `fetch` would in these situations. 
The difference is that "most of the time" is prioritized. 

Make what you want of this :-) It's just a personal experiment that I want to use and share. 