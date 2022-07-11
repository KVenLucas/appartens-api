import { parse } from 'node:url';
import { IHttpRequest, IHttpResponse } from '../presentation/protocols';
import { Routes } from '../routes/classes/routes';
import { errorHandler } from '../shared';

const { routes } = new Routes();

export class RouteHandler {
  public async mount(request: IHttpRequest, response: IHttpResponse) {
    const { url, method } = request;

    const { pathname } = parse(String(url), true);

    const pathRoute = `${pathname}:${method?.toLocaleLowerCase()}`;

    const chosen = routes[pathRoute] || routes.default;

    return Promise.resolve(chosen.call(request, response)).catch(
      errorHandler(response)
    );
  }
}
