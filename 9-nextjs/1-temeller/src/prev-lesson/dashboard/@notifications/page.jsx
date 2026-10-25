import delay from "@/utils/delay";

const Notifications = async () => {
  await delay(3000);

  return (
    <div className="box">
      <h1>Bildirimler Listesi</h1>
    </div>
  );
};

export default Notifications;
