import EmojiPicker from "emoji-picker-react";
import { useRef, useState } from "react";
import { db } from "./../../firebase/index";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Form = ({ user, room }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // formu sıfırla
    setText("");
    setIsOpen(false);

    // mesajın kaydedileceği kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // veritabanındaki messages kolleksiyonuna yeni belge kaydet
    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

  const handleEmoji = (e) => {
    const start = inputRef.current.selectionStart;

    const end = inputRef.current.selectionEnd;

    setText((prev) => prev.slice(0, start) + e.emoji + prev.slice(end));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 sm:gap-3 p-3 bg-white border border-gray-200 shadow-sm mt-auto"
    >
      <input
        type="text"
        placeholder="Mesaj giriniz..."
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 bg-gray-50 border border-gray-200 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-xl px-4 py-3 outline-none transition-all"
      />

      <div className="relative flex items-center">
        <div className="absolute bottom-full -right-30 mb-3 z-50 drop-shadow-2xl">
          <EmojiPicker open={isOpen} onEmojiClick={handleEmoji} />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="p-3 text-xl text-gray-500 hover:bg-gray-100/20 rounded-xl"
        >
          😂
        </button>
      </div>

      <button
        type="submit"
        disabled={!text.trim()}
        className="px-6 py-3 font-medium text-white bg-indigo-600 rounmded-xl hover:bg-indigo-700 disabled:opacity-50 active:scale-95 rounded-xl"
      >
        Gönder
      </button>
    </form>
  );
};

export default Form;
