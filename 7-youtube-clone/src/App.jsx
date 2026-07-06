import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Feed from "./pages/Feed";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Sidebar from "./components/sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSiderbarOpen] = useState(false);
  const toggleSidebar = () => setIsSiderbarOpen(!isSidebarOpen);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header toggleSidebar={toggleSidebar} />

        <div className="flex w-full">
          <Sidebar isSidebarOpen={isSidebarOpen} />

          <main className="flex-1 h-[calc(100vh-56px)] overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/category/:category_name" element={<Category />} />
              <Route path="/watch" element={<Detail />} />
              <Route path="/results" element={<Search />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
