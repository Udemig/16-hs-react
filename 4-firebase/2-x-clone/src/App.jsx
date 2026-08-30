import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/home";
import Protected from "./components/auth/Protected";

const router = createBrowserRouter([
  { path: "/", element: <Auth /> },

  {
    element: <Protected />,
    children: [{ path: "/home", element: <Home /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
