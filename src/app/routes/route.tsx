import { Suspense } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { ROLE } from "../../constants/role";

import PrivateRoute from "./pRoute";
import PublicLayout from "../layout/public-layout";

//public
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";
import CitiesPage from "../pages/public/CitiesPage";
import ToursPage from "../pages/public/ToursPage";
import GuidesPage from "../pages/public/GuidesPage";
import ErrorPage from "../pages/public/404Page";

//other page
import TestPage from "../pages/TestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <PublicLayout>
          <Outlet />
        </PublicLayout>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={"/cities"} />,
      },
      {
        path: "cities",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={false}>
              <CitiesPage />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "tours",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={false}>
              <ToursPage />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "guides",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={false}>
              <GuidesPage />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "test",
        element: (
          <Suspense fallback={<></>}>
            <TestPage />
          </Suspense>
        ),
      },
      {
        path: "template",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={false} requiredRoles={[ROLE.customer]}>
              <TestPage />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<></>}>
        <PrivateRoute inverted={true}>
          <LoginPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<></>}>
        <PrivateRoute inverted={true}>
          <RegisterPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
]);
