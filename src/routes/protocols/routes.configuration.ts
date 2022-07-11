import { IRest } from '../protocols';

export type RoutesConfigurations<L extends { [k: string]: IRest }> = L;
