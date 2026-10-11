import { useGetUsers } from "./service";

const Header = () => {
  const { data } = useGetUsers();

  return (
    <header>
      <br />
      <h2>TANSTACK</h2>
      <br />
      <h2>Aktif Kullanıcı: {data?.data?.users?.length}</h2>
      <br />
    </header>
  );
};

export default Header;
