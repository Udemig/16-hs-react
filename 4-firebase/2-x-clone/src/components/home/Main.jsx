import PostForm from "./../post-form/index";
import PostList from "./../post-list/index";

const Main = ({ user }) => {
  return (
    <div className="border-x border-gray min-h-screen w-full">
      <header className="sticky top-0 z-10 bg-primary/70 backdrop-blur border-b border-gray p-4 font-bold">
        Anasayfa
      </header>

      <PostForm user={user} />

      <PostList />
    </div>
  );
};

export default Main;
