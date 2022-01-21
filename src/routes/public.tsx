import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { lazyImport } from "@/utils/lazyImport";
import { MainLayout } from "@/components/layout/MainLayout";

const { Posts } = lazyImport(() => import("@/features/posts"), "Posts");

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const publicRoutes = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
      },
      { path: "/", element: <Navigate to="/posts" /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
