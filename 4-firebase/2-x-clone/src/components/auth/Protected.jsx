import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";
import PageLoader from "../loader/PageLoader";
import { toast } from "react-toastify";

const Protected = () => {
  // oturumu açık kullanıcı state'i
  const [user, setUser] = useState(undefined);

  // oturum verisine abone ol
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));

    // kullanıcı sayfadan ayrılınca aboneliği durdur
    return () => unsub();
  }, []);

  // veri yüklenene kadar loader bas
  if (user === undefined) return <PageLoader />;

  // kullanıcı oturumu kapalıysa login'e yönlendir
  if (user === null || user?.emailVerified === false) {
    if (user?.emailVerified === false) toast.info("Giriş yapmadan önce mailinizi doğrulayın");

    return <Navigate to="/" replace />;
  }

  // oturum açıksa sayfayı göster
  return <Outlet context={user} />;
};

export default Protected;
