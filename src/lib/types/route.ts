export type Route = {
  path?: string;
  metadata?: {
    groupContext: string;
  };
  childrenRoutes?: {
    [k: string]: { method: string };
  };
};
