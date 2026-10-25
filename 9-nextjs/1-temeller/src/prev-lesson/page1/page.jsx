import Link from "next/link";

const Page1 = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1>Sayfa - 1</h1>

      <Link href="/page1/page2">Sayfa-2'ye Git</Link>
    </div>
  );
};

export default Page1;
