import { toast } from "react-toastify";
import UserAvatar from "./../shared/UserAvatar";
import FormActions from "./FormActions";
import TextArea from "./TextArea";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import uploadMedia from "../../firebase/uploadMedia";
import MediaPreview from "./MediaPreview";
import { useState } from "react";

const PostForm = ({ user }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // input verisini al
    const text = e.target.content.value.trim();
    const file = e.target.media.files[0];

    // girdi yoksa bildirim gönder
    if (!text && !file)
      return toast.warning("Lütfen içeriği giriniz", { position: "bottom-right" });

    try {
      setIsLoading(true);

      // medyayı storage'a yükle
      const mediaUrl = await uploadMedia(file);

      // kolleksiyonun referansını
      const collectionRef = collection(db, "tweets");

      // belgeyi kolleksiyona kaydet
      await addDoc(collectionRef, {
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
        content: {
          text,
          media: mediaUrl,
          mediaType,
        },
        likes: [],
        createdAt: serverTimestamp(),
      });

      // bildirim gönder ve sıfırla
      toast.success("Gönderi paylaşıldı");
      cancelPreview();
      e.target.reset();
    } catch (error) {
      toast.error("Hata! " + error.message, { position: "bottom-right" });
    } finally {
      setIsLoading(false);
    }
  };

  // seçili medya değişince çalışır
  const handleMediaChange = (e) => {
    // inputtan seçilen medyaya eriş
    const file = e.target.files?.[0];

    if (file) {
      // seçilen medyayı kullanıcıya göstermek için url'İni oluştur
      setPreviewUrl(URL.createObjectURL(file));

      // seçilen dosya tipini belirle
      setMediaType(
        file.type.startsWith("image")
          ? "image"
          : file.type.startsWith("video")
            ? "video"
            : file.type.startsWith("audio")
              ? "audio"
              : "not-supported",
      );
    }
  };

  // önizlenen medyayı iptal et
  const cancelPreview = () => {
    setMediaType(null);
    setPreviewUrl(null);
  };

  return (
    <div className="border-b border-gray p-4 flex gap-5">
      <UserAvatar url={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full py-1">
        <TextArea />

        <MediaPreview
          previewUrl={previewUrl}
          mediaType={mediaType}
          cancel={cancelPreview}
          isLoading={isLoading}
        />

        <FormActions
          handleMediaChange={handleMediaChange}
          isDisabled={mediaType === "not-supported"}
          isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export default PostForm;
