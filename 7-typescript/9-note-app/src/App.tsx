import { type FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/page";
import Detail from "./pages/detail/page";
import Form from "./pages/form/page";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/note/:id", element: <Detail /> },
      { path: "/create", element: <Form /> },
      { path: "/edit/:id", element: <Form /> },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
