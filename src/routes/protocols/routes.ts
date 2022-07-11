import { RoutesConfigurations } from './routes.configuration';

export type IRoutes = RoutesConfigurations<{
  '/healthcheck:get': { method: 'GET' };
  default: { method: 'GET' };
}>;
