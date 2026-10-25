import Link from "next/link";

const Page2 = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1>Sayfa - 2</h1>

      <Link href="/page1">Sayfa-1'e Git</Link>
    </div>
  );
};

export default Page2;
