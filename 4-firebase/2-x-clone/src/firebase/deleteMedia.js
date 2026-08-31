import { deleteObject, ref } from "firebase/storage";
import { toast } from "react-toastify";
import { storage } from ".";

const deleteMedia = async (mediaUrl) => {
  if (!mediaUrl) return;

  try {
    // url'deki karakter kodlarını normale çevir
    const normalUrl = decodeURIComponent(mediaUrl);

    // url'den dosya yolunu çıkar
    const startIndex = normalUrl.indexOf("/o/") + 3;
    const endIndex = normalUrl.indexOf("?");
    const path = normalUrl.slice(startIndex, endIndex);

    // silinecek medyanın referansını al
    const fileRef = ref(storage, path);

    // medyayı sil
    await deleteObject(fileRef);
  } catch (error) {
    toast.error("Bir sorun oluştur");
  }
};

export default deleteMedia;
