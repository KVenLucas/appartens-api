import http from 'node:http';
import { RouteHandler } from './route';

const routeHandler = new RouteHandler();

const server = http.createServer(routeHandler.mount);

export { server };
