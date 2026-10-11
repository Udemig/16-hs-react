import { useGetUsers } from "./service";

const UserListSecond = () => {
  const { isLoading, error, data, refetch } = useGetUsers();

  console.log(data);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error)
    return (
      <div>
        <h1>HATA!</h1>
        <button onClick={refetch}>Tekrar Dene</button>
      </div>
    );

  return (
    <div>
      {data.map((user) => (
        <div>
          <img src={user.image} />
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <p>{user.email}</p>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserListSecond;
