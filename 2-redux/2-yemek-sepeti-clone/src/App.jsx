import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";
import Cart from "./pages/cart";
import Header from "./components/header";
import Footer from "./components/footer";
import { useDispatch } from "react-redux";
import { getRestaurants } from "./redux/actions/restaurantActions";
import { useEffect } from "react";
import { getCart } from "./redux/actions/cartActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getCart());
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
