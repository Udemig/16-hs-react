import { useEffect, useState } from "react";
import { db } from "./../../firebase/index";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Loader from "./../loader/index";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    // kolleksiyonun referansını al
    const collectionRef = collection(db, "tweets");

    // sorgu ayarlarını yap
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    // tweets kolleksyionuna abone ol
    const unsub = onSnapshot(q, (snapshot) => {
      const temp = [];

      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      setPosts(temp);

      return () => unsub();
    });
  }, []);

  if (posts === undefined) return <Loader />;

  if (posts.length === 0)
    return (
      <div className="my-40 grid place-items-center">
        <p className="text-zinc-400">Henüz hiç gönderi paylaşılmadı</p>
      </div>
    );

  return posts.map((post) => <Post key={post.id} post={post} />);
};

export default PostList;
