import { BsThreeDots } from "react-icons/bs";
import { auth, db } from "./../../firebase/index";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import EditModal from "../modal/EditModal";
import deleteMedia from "../../firebase/deleteMedia";

const Dropdown = ({ post }) => {
  // tweet'i atan kullanıcı ile oturumu açık olan aynı mı?
  const isOwn = post.user.id === auth.currentUser.uid;

  // tweet'i başkası attıysa butonu gösterme
  if (!isOwn) return;

  // popup açık mı?
  const [isOpen, setIsOpen] = useState(false);
  // modal açık mı?
  const [isModalOpen, setIsModalOpen] = useState(false);

  // tweet'i kaldır
  const handleDelete = () => {
    const docRef = doc(db, "tweets", post.id);

    deleteDoc(docRef)
      .then(async () => {
        await deleteMedia(post.content.media);
        toast.success("Gönderi akıştan kaldırıldı");
      })
      .catch(() => toast.error("İşlem başarısız oldu"));
  };

  return (
    <>
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          <BsThreeDots className="text-zinc-400" />
        </button>

        {isOpen && (
          <div className="absolute bg-zinc-700/50 -inset-e-1 rounded-lg z-99 backdrop-blur-lg shadow-lg">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-5 px-4 py-2 border-b border-zinc-500"
            >
              <MdEdit />
              <span className="text-sm">Düzenle</span>
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center gap-5 px-4 py-2 border-b border-zinc-500"
            >
              <MdDelete />
              <span className="text-sm">Sil</span>
            </button>
          </div>
        )}
      </div>

      <EditModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} post={post} />
    </>
  );
};

export default Dropdown;
