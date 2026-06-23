import useFetch from "../hooks/useFetch";

const UserListTwo = () => {
  // Object Destructuring
  // Bir objenin içerisindeki değerleri tek tek alıp değişkenlere atamayı kolaylaştıran bir özelliktir
  const { isLoading, error, data } = useFetch("https://dummyjson.com/users");

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA!: {error.message}</h1>;

  return (
    <div>
      <h1>Kullanıcı Listesi - 2</h1>

      <div>
        {data.users.map((user) => (
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

export default UserListTwo;
