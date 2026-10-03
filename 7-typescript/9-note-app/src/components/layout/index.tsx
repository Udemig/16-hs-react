import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container py-6 px-4 sm:px-6 animate-slide-up">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
