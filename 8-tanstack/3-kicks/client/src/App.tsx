import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Protected from "./components/protected";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Protected allowedRoles={["user", "admin"]}>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/admin/dashboard",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Dashboard />
          </Protected>
        ),
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
