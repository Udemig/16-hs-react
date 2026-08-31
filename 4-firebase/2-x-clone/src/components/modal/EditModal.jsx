import { toast } from "react-toastify";
import Modal from "./index";
import { serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import uploadMedia from "./../../firebase/uploadMedia";
import deleteMedia from "./../../firebase/deleteMedia";
import Loader from "../loader";

const EditModal = ({ isOpen, close, post }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMediaDeleting, setIsMediaDeleting] = useState(false);

  const handleClose = () => {
    setIsMediaDeleting(false);
    close();
  };

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputtan veriyi al
    const text = e.target.text.value.trim();
    const file = e.target.media.files[0];
    const fileType = file?.type?.split("/")?.[0];

    // veri boşsa hata fırlat
    if (!text && !file) return toast.warning("İçerik boş olamaz");

    try {
      setIsLoading(true);

      // güncellenicek veriyi hazırla
      let updateData = {
        "content.text": text,
        updatedAt: serverTimestamp(),
      };

      // medya silinecekse:
      if (isMediaDeleting) {
        await deleteMedia(post.content.media);

        updateData["content.media"] = null;
        updateData["content.mediaType"] = null;
      }

      // medya yüklenicekse
      if (file) {
        const mediaUrl = await uploadMedia(file);
        updateData["content.media"] = mediaUrl;
        updateData["content.mediaType"] = fileType;
      }

      // güncellenicek belgenin referansını al
      const docRef = doc(db, "tweets", post.id);

      // belgeyi güncelle
      await updateDoc(docRef, updateData);

      // modal'ı kapat
      handleClose();
      toast.success("Gönderi güncellendi");
    } catch (error) {
      toast.error("Güncelleme başarısız");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} close={handleClose}>
      <h1 className="text-2xl">Düzenlenme Modalı</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-10 min-w-[90%]">
        <label className="text-sm mb-3 text-zinc-400">Metni Değiştir</label>

        <textarea
          name="text"
          defaultValue={post.content.text}
          className="resize-6 min-h-25 max-h-62.5 bg-black text-secondary border border-zinc-700 rounded-md p-3 outline-none"
        ></textarea>

        <label className="text-sm mb-3 text-zinc-400 mt-8">Medyayı Değiştir</label>
        {post.content.media && !isMediaDeleting ? (
          <button
            onClick={() => setIsMediaDeleting(true)}
            type="button"
            className="submit-button font-semibold tracking-tight"
          >
            Medyayı Kaldır
          </button>
        ) : (
          <input type="file" name="media" className="border boder-zinc-700 p-3 rounded-md" />
        )}

        <div className="flex justify-end mt-10 gap-5">
          <button onClick={handleClose} type="button">
            Vazgeç
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="submit-button tracking-tight font-semibold"
          >
            {isLoading ? <Loader /> : "Gönder"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
