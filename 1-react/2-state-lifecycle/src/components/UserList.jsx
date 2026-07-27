import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect componentDidMount anında yani bileşen ekrana basılınca çalışıcak
  useEffect(() => {
    // api isteğini at
    fetch("https://dummyjson.com/users")
      // json formatında gelen cevabı js formatına çevir
      .then((response) => response.json())
      // kullanıcı verisini state'e aktar
      .then((data) => setUsers(data.users))
      // hata geldiğinde hata mesajını state'e aktar
      .catch((err) => setError(err.message))
      // yüklenme bitince loading state'ini false'a çek
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>

      {/*
       * API'dan yanıt bekliyorsak: yükleniyor bas
       * API'dan hata geldiyse: hata mesajını bas
       * API'dan veri geldiyse: kullanıcıları ekrana bas
       */}
      {isLoading ? (
        <h2>Yükleniyor...</h2>
      ) : error ? (
        <h2>Hata! {error}</h2>
      ) : (
        users.map((user) => (
          <div>
            <img src={user.image} width={50} />
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <h5>{user.email}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
