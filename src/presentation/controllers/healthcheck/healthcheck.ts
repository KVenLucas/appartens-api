import { IController, IHttpRequest, IHttpResponse } from '../../protocols';

export class HealthcheckController implements IController {
  async execute(request: IHttpRequest, response: IHttpResponse) {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end('HealthcheckController!');
  }
}
