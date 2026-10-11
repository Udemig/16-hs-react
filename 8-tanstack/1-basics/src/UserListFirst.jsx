import axios from "axios";
import { useEffect, useState } from "react";

const UserListFirst = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchUsers = () => {
    setIsLoading(true);

    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setData(res.data.users);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error)
    return (
      <div>
        <h1>HATA!</h1>
        <button onClick={fetchUsers}>Tekrar Dene</button>
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

export default UserListFirst;
