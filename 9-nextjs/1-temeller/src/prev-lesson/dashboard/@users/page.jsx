import delay from "@/utils/delay";

const Users = async () => {
  await delay(2000);

  return (
    <div className="box">
      <h1>Kullanıcılar</h1>
    </div>
  );
};

export default Users;
