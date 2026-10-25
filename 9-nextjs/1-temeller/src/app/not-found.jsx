import Link from "next/link";

const NotFound = () => {
  console.log("9");

  return (
    <div className="flex flex-col gap-10 my-20">
      <h1 className="text-yellow-500">404</h1>
      <h1>Sayfa Bulunamadı</h1>
      <Link href="/">Anasayfaya Git</Link>
    </div>
  );
};

export default NotFound;
