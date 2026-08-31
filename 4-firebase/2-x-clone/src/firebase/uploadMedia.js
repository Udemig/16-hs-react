import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

const uploadMedia = async (file) => {
  // 1) dosya yoksa durdur
  if (!file) return null;

  // 2) dosya formatı resim, video, ses değilse izin verme
  if (
    !file.type.startsWith("image") &&
    !file.type.startsWith("video") &&
    !file.type.startsWith("audio")
  )
    throw new Error("Medya tipi desteklenmiyor");

  // 3) dosya boyutu 20mb üzerindeyse yüklemeye izin verme
  if (file.size > 20000000) throw new Error("Medya boyutu sınırı aşıyor (20mb)");

  // 4) medyanın yükleniceği konumun referansını al
  const mediaRef = ref(storage, `post-media/${v4()}${file.name}`);

  // 5) medyayı storage'a yükle
  await uploadBytes(mediaRef, file);

  // 6) yüklenen medyanın url'ini döndür
  const url = await getDownloadURL(mediaRef);

  return url;
};

export default uploadMedia;
