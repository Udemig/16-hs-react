import { getUsers } from "@/utils/service";
import { FC } from "react";
import { BsEye } from "react-icons/bs";
import BanButton from "./../button/BanButton";
import Link from "next/link";

const UserTable: FC = async () => {
  const users = await getUsers();

  return (
    <div className="max-sm:w-[80vw] overflow-x-auto card mt-6">
      <table className="w-full">
        <thead className="border-b border-zinc-200 bg-zinc-50">
          <tr>
            <th className="text-left pl-5">No</th>
            <th className="text-left">İsim</th>
            <th className="text-left">Eposta</th>
            <th>Ülke</th>
            <th>Şehir</th>
            <th>Sipariş</th>
            <th>Eylem</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, key) => (
            <tr className="hover:bg-zinc-50/70 transition-colors" key={key}>
              <td className="text-left pl-5 font-medium text-zinc-500">{key + 1}</td>
              <td className="text-left font-medium text-zinc-900">{user.name}</td>
              <td className="text-left text-zinc-600">{user.email}</td>
              <td>{user.address.country}</td>
              <td>{user.address.city}</td>
              <td>
                <span className="flex-center min-w-7 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold ring-1 ring-inset ring-blue-600/20 rounded-full">
                  {user.orders.length}
                </span>
              </td>
              <td>
                <div className="flex gap-2 justify-center">
                  <Link href={`?userId=${user.id}`} className="button hover:bg-zinc-100">
                    <BsEye className="text-zinc-600" />
                  </Link>
                  <BanButton id={user.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
