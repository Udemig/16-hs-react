import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-fill d-flex justify-content-center align-items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ürünler" element={<Products />} />
            <Route path="/hakkımızda" element={<About />} />

            {/* Dinamik Route */}
            <Route path="/ürünler/:id" element={<Detail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
