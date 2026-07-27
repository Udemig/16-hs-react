import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Story from "./pages/Story";
import Novel from "./pages/Novel";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ürünler", element: <Products /> },
      { path: "/hakkımızda", element: <About /> },
      { path: "/ürünler/:id", element: <Detail /> },
      {
        path: "/kategori",
        element: <Category />,
        children: [
          { path: "roman", element: <Novel /> },
          { path: "hikaye", element: <Story /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
