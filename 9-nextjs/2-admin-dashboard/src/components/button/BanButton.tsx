"use client";

import { deleteUser } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const BanButton: FC<Props> = ({ id }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (!confirm("Bu kullanıcıyı silmek istediğinziden emin misiniz?")) return;

    setIsLoading(true);

    deleteUser(id)
      .then(() => {
        toast.success("Kullanıcı kaldırıldı");
        router.refresh(); // sayfayı yeniden renderla
        // router.push("/users");
      })
      .catch((err) => {
        toast.error("İşlem başarısız");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="button hover:bg-red-50 border-red-200 hover:border-red-300"
    >
      <BsTrash className="text-red-600" />
    </button>
  );
};

export default BanButton;
