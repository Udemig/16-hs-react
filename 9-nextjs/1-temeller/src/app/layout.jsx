import Header from "@/components/Header";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import LocalFont from "next/font/local";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Getir",
    template: "Getir | %s",
  },
  description: "Alışveriş yap",
  keywords: ["e-ticaret", "yemek", "sipariş"],
  author: "Furkan Evin",
};

// google fonts'dan aldık
const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
});

// local font
const matcha = LocalFont({
  src: "../assets/matcha.ttf",
  variable: "--font-matcha",
});

export default function RootLayout({ children }) {
  console.log("7");

  return (
    <html lang="en" className={`h-full antialiased ${matcha.variable} ${roboto.variable}`}>
      <body className="min-h-full flex flex-col text-center">
        {/* <Header /> */}

        <main className="p-10 flex-1">{children}</main>

        <footer className="border-t p-5 px-10 font-roboto">FOOTER</footer>
      </body>
    </html>
  );
}
