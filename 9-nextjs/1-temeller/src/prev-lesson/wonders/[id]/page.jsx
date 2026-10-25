import Image from "next/image";
import { data } from "../../../utils/constants";
import Link from "next/link";
import { notFound } from "next/navigation";

const DetailPage = async ({ params }) => {
  // url'deki id'ye eriş
  const { id } = await params;

  // sayfada gösterilecek veriyi bul
  const wonder = data.find((i) => i.id === id);

  if (!wonder) return notFound();

  return (
    <div className="mx-auto text-3xl">
      <div className="w-3/4 lg:w-1/2 mx-auto">
        <Link href="/wonders">Geri</Link>

        <h1 className="text-center text-5xl font-bold mt-10 mb-5">{wonder.name}</h1>

        <Image
          src={wonder.src}
          alt={wonder.name}
          className="w-full aspect-square object-cover rounded-md"
        />

        <h3 className="my-5">{wonder.photographer}</h3>

        <h3>Lokasyon: {wonder.location}</h3>
      </div>
    </div>
  );
};

export default DetailPage;
