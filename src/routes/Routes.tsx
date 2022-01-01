import React from 'react';
import HomePage from '../pages/Home';
import AppRoutes from './AppRoutes';
import { IRouteConfig } from './routes.interface';

/**
 * This file is responsible for Configuring Routes for the application.
 * New routes can be added by pusing an object with path and component
 * keys to the config variable/
 *
 */

const Routes = () => {
  const config: IRouteConfig[] = [{ path: '/', component: HomePage }];

  return <AppRoutes routeConfig={config} />;
};

export default Routes;
