import type { FC } from "react";
import { useDeletePlace } from "../../service/hooks";

interface Props {
  id: string;
}

const DeleteBtn: FC<Props> = ({ id }) => {
  const { isPending, mutate } = useDeletePlace();

  const handleDelete = () => {
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // api isteğini tetikle
    mutate(id);
  };

  return (
    <div className="flex justify-end">
      <button
        disabled={isPending}
        onClick={handleDelete}
        className="border border-red-500 py-1 px-4 rounded-md transition hover:bg-red-100 text-red-500"
      >
        {isPending ? "Siliniyor..." : "Sil"}
      </button>
    </div>
  );
};

export default DeleteBtn;
