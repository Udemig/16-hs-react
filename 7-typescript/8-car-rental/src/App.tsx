import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Işık hüzmesi */}
        <div className="fixed top-20 left-20 size-72 bg-primary-blue/20 rounded-full blur-xl animate-pulse" />
        <div
          className="fixed bottom-20 right-20 size-72 bg-primary-blue/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <Header />

        <main className="flex-1 z-10 relative">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
