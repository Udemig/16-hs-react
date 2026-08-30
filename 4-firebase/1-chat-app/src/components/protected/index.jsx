import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import Loader from "../loader";

const Protected = () => {
  // 1. kullancın oturumunun state'ini tut
  const [user, setUser] = useState(undefined); // undefined - null - object

  // 2. kullanıcı oturum verisini al
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  // 3. kullanıcı verisi yükleniyorsa loader bas
  if (user === undefined) return <Loader />;

  // 4. kullanıcı oturumu kapalıysa: login sayfasına yönlendir
  if (user === null) return <Navigate to="/login" replace />;

  // 5. kullanıcının oturumu açıksa: alt route'un elementini ekrana bas
  return <Outlet context={user} />;
};

export default Protected;
