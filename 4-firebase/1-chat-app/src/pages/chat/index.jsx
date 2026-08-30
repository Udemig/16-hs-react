import { useOutletContext, useParams } from "react-router-dom";
import Head from "../../components/chat/Head";
import Messages from "../../components/chat/Messages";
import Form from "../../components/chat/Form";

const Chat = () => {
  const user = useOutletContext();
  const { room } = useParams();

  return (
    <div className="h-screen md:grid md:place-items-center">
      <div className="bg-white text-dark w-full md:w-[80vw] lg:w-[60vw] xl:w-[50vw] h-screen md:h-[80vh] md:rounded-md overflow-hidden flex flex-col">
        <Head username={user.displayName} photo={user.photoURL} room={room} />
        <Messages room={room} />
        <Form user={user} room={room} />
      </div>
    </div>
  );
};

export default Chat;
