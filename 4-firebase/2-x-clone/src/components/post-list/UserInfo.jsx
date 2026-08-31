import { getUsername } from "../../utils/helpers";
import dayjs from "dayjs";
import "dayjs/locale/tr.js";
import relativeTime from "dayjs/plugin/relativeTime";
import { MdEdit } from "react-icons/md";
dayjs.extend(relativeTime);

const UserInfo = ({ post }) => {
  // tarihi date formatına çevir
  let date = post.createdAt?.toDate();

  // oluşturulan tarih üzerinden ne kadar geçti
  date = dayjs(date).locale("tr").fromNow();

  return (
    <div className="flex items-center gap-2 whitespace-nowrap text-zinc-400">
      <p className="text-white font-semibold">{post.user.name}</p>
      <p className="text-sm">{getUsername(post.user.name)}</p>
      <p className="text-xs">{date}</p>

      {post.updatedAt && (
        <div>
          <MdEdit className="md:hidden" />
          <span className="max-md:hidden text-xs">* düzenlendi</span>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
