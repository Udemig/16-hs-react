"use client";

import { useRouter } from "next/navigation";

const Deneme = () => {
  console.log("5")

  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/recipes-server");
          router.replace("/recipes-server");
          router.back();
          router.forward();
          router.refresh();
        }}
      >
        Yönlendir
      </button>
    </div>
  );
};

export default Deneme;
