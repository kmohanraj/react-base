import React from "react";
/**
 * This file contains the interfaces required for below files:
 * 1. AppRoutes.tsx
 * 2. Routes.tsx
 *
 */

export interface IAppRouteProps {
  routeConfig: IRouteConfig[];
}
export interface IRouteConfig {
  path: string;
  component: React.FC;
}
