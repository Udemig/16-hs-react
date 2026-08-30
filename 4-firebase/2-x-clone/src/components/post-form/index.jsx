import { toast } from "react-toastify";
import UserAvatar from "./../shared/UserAvatar";
import FormActions from "./FormActions";
import TextArea from "./TextArea";

const PostForm = ({ user }) => {
  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // input verisini al
    const text = e.target.content.value.trim();

    // girdi yoksa bildirim gönder
    if (!text) return toast.warning("Lütfen içeriği giriniz", { position: "bottom-right" });

    // kolleksiyonun referansını

    // belgeyi kolleksiyona kaydet

    // bildirim gönder ve sıfırla
  };

  return (
    <div className="border-b border-gray p-4 flex gap-5">
      <UserAvatar url={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full py-1">
        <TextArea />

        <FormActions />
      </form>
    </div>
  );
};

export default PostForm;
