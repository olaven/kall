import { KallResponse } from "./support.ts";

export const status = async (result: KallResponse<any>) => {
  const [status] = await result;
  return status;
};

export const body = async <T>(result: KallResponse<T>) => {
  const [_, body] = await result;
  return body;
};

export const response = async (result: KallResponse<any>) => {
  const [_s, _b, response] = await result;
  return response;
};
