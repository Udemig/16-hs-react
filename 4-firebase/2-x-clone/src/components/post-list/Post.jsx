import UserAvatar from "./../shared/UserAvatar";
import Buttons from "./Buttons";
import Content from "./Content";
import Dropdown from "./Dropdown";
import UserInfo from "./UserInfo";

const Post = ({ post }) => {
  console.log(post);

  return (
    <div className="border-b border-gray p-4 flex gap-2">
      <UserAvatar url={post.user.photo} name={post.user.name} />

      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between">
          <UserInfo post={post} />
          <Dropdown post={post} />
        </div>

        <Content content={post.content} />

        <Buttons post={post} />
      </div>
    </div>
  );
};

export default Post;
