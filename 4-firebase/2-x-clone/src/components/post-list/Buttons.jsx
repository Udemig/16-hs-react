import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Buttons = ({ post }) => {
  // aktif kullanıcı tweet'i likelayanlar arasında var mı?
  const isLiked = post.likes.includes(auth.currentUser.uid);

  // like
  const toggleLike = async () => {
    // güncellenicek belgenin referansını al
    const docRef = doc(db, "tweets", post.id);

    // isLiked:true ise kullanıcı id'sini diziden kaldır yoksa ekle
    await updateDoc(docRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid) //
        : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center">
      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <FaRegComment className="size-3.5" />
      </button>

      <button className="post-icon hover:text-green-400 hover:bg-green-400/20">
        <FaRetweet className="size-3.5" />
      </button>

      <button
        onClick={toggleLike}
        className={`post-icon hover:text-pink-400 hover:bg-pink-400/20 ps-3 pe-6 ${isLiked && "text-pink-500"}`}
      >
        {isLiked ? <FaHeart className="size-3.5" /> : <FaRegHeart className="size-3.5" />}

        <span className="absolute inset-e-2 top-1.25 w-3 text-sm">{post.likes.length}</span>
      </button>

      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <RiShare2Line className="size-3.5" />
      </button>
    </div>
  );
};

export default Buttons;
