import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from '../pages/Error';
import { IAppRouteProps } from './routes.interface';

const AppRoutes = (props: IAppRouteProps) => {
  return (
    <BrowserRouter>
      <Routes>
        {props.routeConfig.map((ele, index) => (
          <Route path={ele.path} element={<ele.component />} key={index} />
        ))}
        <Route
          path="*"
          element={<ErrorPage title="404" message="Page Not Found" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
