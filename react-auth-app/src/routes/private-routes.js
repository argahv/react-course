import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout";

const Dashboard = lazy(() => import("../pages/dashboard"));

export default function privateRoutes() {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
