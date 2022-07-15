import { Route } from '../types';

export function Get(name: string) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor &
      Partial<{
        $server: {
          $routes: Route[];
        };
        controllerName: string;
      }>
  ) {
    const originalValue = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (this.$server && this.$server.$routes) {
        const forward = this.$server.$routes.find(
          ({ metadata }) => metadata!.groupContext === this.controllerName
        );

        forward!.childrenRoutes = Object.assign({ [name]: { method: 'GET' } });

        console.log(JSON.stringify(forward, null, 2));
      }
    };
  };
}
