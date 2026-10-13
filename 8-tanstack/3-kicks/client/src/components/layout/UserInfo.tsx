import { useState } from "react";
import Search from "../../assets/icons/search.svg?react";
import User from "../../assets/icons/user.svg?react";
import { useLogout, useProfile } from "../../service/auth";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useProfile();
  const { isPending, mutate } = useLogout();

  return (
    <div className="relative flex justify-end items-center gap-4">
      <button>
        <Search className="size-5 md:size-6" />
      </button>

      <button onClick={() => setIsOpen(!isOpen)}>
        <User className="size-5 md:size-6" />
      </button>

      {isOpen && user && (
        <div className="absolute right-0 top-10 z-50 min-w-48 bg-white rounded-2xl shadow-xl overflow-hidden py-2">
          <p className="px-5 py-2 font-bold border-b border-gray">
            {user.firstName} {user.lastName}
          </p>

          {user.role === "admin" && (
            <Link to="/admin/dashboard" className="menu-item">
              Admin Paneli
            </Link>
          )}

          <button className="menu-item text-red-500" onClick={() => mutate()} disabled={isPending}>
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
