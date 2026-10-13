import type { FC, ReactNode } from "react";
import { useProfile } from "../../service/auth";
import Loader from "../loader";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  allowedRoles?: ("user" | "admin")[];
}

// Yetkilendirme Bileşeni (HOC):
// Eğerki kullanıcı oturumu kapalıysa kullanıcnın sayfaya girmesini engelleyecek
const Protected: FC<Props> = ({ children, allowedRoles }) => {
  // oturumu açık olan kullanıcının bilgilerini al
  const { isLoading, user } = useProfile();

  // kullanıcın verisi yüklenene kadar loader bas
  if (isLoading) return <Loader />;

  // oturumu açık değilse login sayfasına yönlendir
  if (!user) return <Navigate to="/login" replace />;

  // eğer kullanıcının rolü izin verilen roller arasında yoksa anasayfaya yönlendir
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

  // yetkisi varsa sayfa içeriğini göster
  return children;
};

export default Protected;
