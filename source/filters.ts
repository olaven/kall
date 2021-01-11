import { KallResponse } from "./support.ts";

export const filterStatus = async (result: KallResponse<any>) => {
  const [status] = await result;
  return status;
};

export const filterBody = async <R>(result: KallResponse<R>) => {
  const [_, body] = await result;
  return body;
};

export const filterResponse = async (result: KallResponse<any>) => {
  const [_s, _b, response] = await result;
  return response;
};
