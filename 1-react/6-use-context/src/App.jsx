import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-10 d-flex flex-column">
        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sepet" element={<Basket />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
