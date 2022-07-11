import { DefaultController } from '../../presentation/controllers/default/default';
import { HealthcheckController } from '../../presentation/controllers/healthcheck/healthcheck';
import { IConfigRoutes, IRoute } from '../protocols';
import { IAbstractRoutes } from './protocols/abstract.routes';

const healthcheckController = new HealthcheckController();
const defaultController = new DefaultController();

export abstract class AbstractRoutes implements IAbstractRoutes {
  routes: IConfigRoutes<IRoute>;
  constructor() {
    this.routes = {
      '/healthcheck:get': {
        call: async (request, response) =>
          await healthcheckController.execute(request, response)
      },

      default: {
        call: async (request, response) =>
          await defaultController.execute(request, response)
      }
    };
  }
}
