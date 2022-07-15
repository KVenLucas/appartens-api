import http from 'node:http';
import { parse } from 'node:url';
import { Route } from '../types';

export class ServerBootstrapSingleton {
  private static _$instance: ServerBootstrapSingleton =
    new ServerBootstrapSingleton();

  public static getInstance(): ServerBootstrapSingleton {
    return ServerBootstrapSingleton._$instance;
  }

  public async handler(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ) {
    const { url, method } = request;

    const { pathname } = parse(String(url), true);

    const pathRoute = `${pathname}:${method?.toLocaleLowerCase()}`;
  }

  constructor(
    private readonly apiVersion = 'V.0.1',
    private $routes: Route[] = [
      { path: '/default', metadata: { groupContext: 'DefaultController' } }
    ]
  ) {
    if (ServerBootstrapSingleton._$instance) {
      return ServerBootstrapSingleton._$instance;
    }
    ServerBootstrapSingleton._$instance = this;
  }

  public static createServer(requestListener: http.RequestListener) {
    const server = http.createServer(requestListener);
    return server;
  }

  public set route(route: Route) {
    const r = { ...route };

    this.$routes.push(r);
  }
}
