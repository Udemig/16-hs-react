import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Ziyaret ettiğimiz child route'u çağır */}
      <main className="flex-fill d-flex justify-content-center align-items-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
