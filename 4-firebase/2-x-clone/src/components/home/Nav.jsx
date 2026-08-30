import { FaDoorOpen } from "react-icons/fa";
import { getUsername } from "../../utils/helpers";
import UserAvatar from "../shared/UserAvatar";
import { navSections } from "./../../utils/constants";
import { auth } from "./../../firebase/index";
import { signOut } from "firebase/auth";

const Nav = ({ user }) => {
  return (
    <div className="flex flex-col justify-between items-end px-2 py-4 h-screen sticky top-0">
      {/* üst kısım */}
      <div>
        <img src="x-logo.webp" alt="x" className="w-14 mb-4" />

        {navSections.map((item, key) => (
          <button
            key={key}
            className="flex items-center gap-3 text-2xl lg:text-xl p-3 rounded-lg hover:bg-gray w-full"
          >
            {item.icon}

            <span className="whitespace-nowrap max-lg:hidden text-base">{item.title}</span>
          </button>
        ))}
      </div>

      {/* alt kısım */}
      <div>
        <div className="flex max-lg:flex-col max-lg:items-center gap-4 justify-between">
          <div className="flex gap-2">
            <UserAvatar url={user.photoURL} name={user.displayName} />

            <div>
              <p className="max-lg:hidden text-sm">{user.displayName}</p>
              <p className="max-lg:hidden text-sm text-zinc-400">{getUsername(user.displayName)}</p>
            </div>
          </div>

          <button type="button" title="Çıkış Yap" onClick={() => signOut(auth)}>
            <FaDoorOpen className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
