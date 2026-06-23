import { useEffect, useState } from "react";

const UserListOne = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data.users))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA!: {error.message}</h1>;

  return (
    <div>
      <h1>Kullanıcı Listesi - 1</h1>

      <div>
        {data.map((user) => (
          <div>
            <img src={user.image} width={50} />
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <h3>{user.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListOne;
