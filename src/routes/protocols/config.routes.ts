import http from 'node:http';
import { IRoutes } from './routes';

// [k in K]: { call: http.RequestListener; metadata: IRoutes[K] };

export type IConfigRoutes<K extends keyof IRoutes> = {
  [k in K as string]: { call: http.RequestListener };
};
