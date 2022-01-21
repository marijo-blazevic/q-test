import { Navigate, useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "*", element: <Navigate to="/" /> }];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
