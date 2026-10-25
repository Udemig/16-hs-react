import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

const Test1 = () => {
  return (
    <div className="grid gap-10">
      <h1>İç İçe Kullanım</h1>

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
};

export default Test1;
