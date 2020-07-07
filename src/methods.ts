import { CREATED, OK } from "./codes.ts";

type KallResponse<T> = Promise<[number, T | null, Response]>;

export const patch = async <T>(url: string, payload: T): KallResponse<T> => {
  const response = await fetch(
    url,
    { method: "patch", body: JSON.stringify(payload) },
  );
  return [-1, {} as T, response];
};

export const del = async <T>(url: string): KallResponse<T> => {
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (response.status === OK) {
    const payload = await response.json() as T;
    return [response.status, payload, response];
  }

  return [response.status, null, response];
};

export const put = async <T>(
  url: string,
  payload: T,
): KallResponse<T> => {
  const response = await fetch(url, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.status === OK || response.status === CREATED) {
    const payload = await response.json();
    return [response.status, payload as T, response];
  }

  return [response.status, null, response];
};

export const post = async <T>(
  url: string,
  payload: T,
): KallResponse<T> => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.status === CREATED) {
    const payload = await response.json();
    return [response.status, payload as T, response];
  }

  return [response.status, null, response];
};

export const get = async <T>(url: string): KallResponse<T> => {
  const response = await fetch(url);
  if (response.status === OK) {
    const payload = await response.json();
    return [response.status, payload as T, response];
  }

  return [response.status, {} as T, response];
};
