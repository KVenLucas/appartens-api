import { IHttpRequest, IHttpResponse } from './http';

export interface IController {
  execute: (request: IHttpRequest, response: IHttpResponse) => Promise<void>;
}
