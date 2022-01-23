import { InfoProps } from "@/shared/types/api-types";
import { Navigate, useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";

export const AppRoutes: React.FC<InfoProps> = (props) => {
  console.log(`${props.message} ${AppRoutes.displayName}`);

  const commonRoutes = [{ path: "*", element: <Navigate to="/" /> }];

  const routes = publicRoutes(props.message);

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

AppRoutes.displayName = "AppRoutes";
