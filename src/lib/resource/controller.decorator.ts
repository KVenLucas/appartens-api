import { ServerBootstrapSingleton } from '../classes/server.bootstrap';
import { ConstructorMixin } from '../types';

export function Controller(name: string) {
  return function <T extends ConstructorMixin>(constructor: T) {
    return class extends constructor {
      protected readonly $server = ServerBootstrapSingleton.getInstance();
      controllerName: string;

      mathRoute(path: string) {
        if (!path.startsWith('/')) {
          return `/${path}`;
        }

        return path;
      }

      constructor(...args: any[]) {
        super(...args);
        this.controllerName = constructor.name;

        this.$server.route = {
          path: this.mathRoute(name),
          metadata: {
            groupContext: constructor.name
          }
        };
      }
    };
  };
}
