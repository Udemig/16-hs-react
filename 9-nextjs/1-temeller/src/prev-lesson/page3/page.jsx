import Link from "next/link";

const Page3 = () => {
  return (
    <div>
      <h1 className="mb-10">Sayfa - 3</h1>

      <Link href="/page4">Sayfa - 4'e Git</Link>
    </div>
  );
};

export default Page3;
