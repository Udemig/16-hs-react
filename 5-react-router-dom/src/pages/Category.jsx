import { Outlet } from "react-router-dom";

const Category = () => {
  // kullanıcın rolü admin değilse bu sayfayı ziyaret etmesine izin verme
  // if ("kullanıcı admin değilse") return <h1>Yetkisiz İşlem</h1>;

  return (
    <div className="d-flex gap-4 align-items-center">
      <aside className="border shadow p-4">
        <h1>aside alanı</h1>
      </aside>

      {/* Kapsayıcı route içerisine ziyaret edilen alt route'un bileşenini ekrana basmaya yarar */}
      <Outlet />
    </div>
  );
};

export default Category;
