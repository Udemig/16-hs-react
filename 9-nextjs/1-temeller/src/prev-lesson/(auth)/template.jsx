"use client";
import Link from "next/link";
import { useState } from "react";

const Layout = ({ children }) => {
  const [name, setName] = useState("");
  // if ("admin değilse") return <h1>Giriş Yetkin Yok</h1>;

  return (
    <div className="flex gap-5">
      <aside className="flex flex-col gap-5 border p-5 rounded-md">
        <h2>Hoşgeldiniz, {name}</h2>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="adınız..." />
        <Link href="/login">Giriş Yap</Link>
        <Link href={"/register"}>Kayıt Ol</Link>
      </aside>

      {children}
    </div>
  );
};

export default Layout;
