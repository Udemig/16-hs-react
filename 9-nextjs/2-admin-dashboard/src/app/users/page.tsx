import { FC, Suspense } from "react";
import UserTable from "../../components/table/UserTable";
import Loading from "../loading";
import UserModal from "@/components/modal/UserModal";

interface Props {
  searchParams: Promise<{
    userId?: string;
  }>;
}

const UsersPage: FC<Props> = async ({ searchParams }) => {
  const { userId } = await searchParams;

  return (
    <div className="page">
      <div>
        <h1 className="title">Kullanıcılar</h1>
        <p className="text-zinc-500">Kayıtlı kullanıcıları yönetin</p>
      </div>

      <Suspense fallback={<Loading />}>
        <UserTable />
      </Suspense>

      <UserModal userId={userId} />
    </div>
  );
};

export default UsersPage;
