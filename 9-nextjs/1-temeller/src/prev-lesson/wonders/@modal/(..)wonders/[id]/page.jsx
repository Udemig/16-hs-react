"use client";

import Image from "next/image";
// import { data } from "../../../../../utils/constants";
import { data } from "@/utils/constants";
import { useRouter } from "next/navigation";

const Modal = async ({ params }) => {
  const router = useRouter();

  const { id } = await params;

  const wonder = data.find((item) => item.id === id);

  if (!wonder) return null;

  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center backdrop-blur-xs z-999 p-10">
      <div className="bg-white text-black px-10 pb-10 rounded-md max-w-lg">
        <div className="flex justify-end my-5 text-2xl">
          <button onClick={() => router.back()}>X</button>
        </div>

        <h1>{wonder.name}</h1>

        <Image
          src={wonder.src}
          alt={wonder.name}
          className="max-h-75 my-5 text-3xl object-cover rounded-md aspect-square"
          onClick={() => window.location.reload()}
        />

        <h3>{wonder.photographer}</h3>

        <h3>Lokasyon: {wonder.location}</h3>
      </div>
    </div>
  );
};

export default Modal;
