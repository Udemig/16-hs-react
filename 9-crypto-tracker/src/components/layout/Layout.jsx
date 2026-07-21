import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Header />

      <main className="container flex-1 py-6">
        {/* Outlet: kullanıcnın ziyaret ettiği sayfanın bileşeni layout içerisinde nereye yerleşiceğeni belirlemeye yarar */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
