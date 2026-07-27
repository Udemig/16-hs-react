import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Story from "./pages/Story";
import Novel from "./pages/Novel";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

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

            {/* Nested Routes */}
            <Route path="/kategori" element={<Category />}>
              <Route path="hikaye" element={<Story />} />
              <Route path="roman" element={<Novel />} />
            </Route>

            {/* 404 Sayfası */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
