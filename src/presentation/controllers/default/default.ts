import { IController, IHttpRequest, IHttpResponse } from '../../protocols';

export class DefaultController implements IController {
  async execute(request: IHttpRequest, response: IHttpResponse) {
    response.writeHead(404);
    response.end('DefaultController!');
  }
}
