import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { lazyImport } from "@/utils/lazyImport";
import { MainLayout } from "@/components/layout/MainLayout";

const { Posts } = lazyImport(() => import("@/features/posts"), "Posts");
const { Post } = lazyImport(() => import("@/features/post"), "Post");

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
      {
        path: "/post/:id",
        element: <Post />,
      },
      { path: "/", element: <Navigate to="/posts" /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
