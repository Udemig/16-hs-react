import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/coin/:id", element: <Detail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
