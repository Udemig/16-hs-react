import { useOutletContext } from "react-router-dom";
import Aside from "../../components/home/Aside";
import Main from "../../components/home/Main";
import Nav from "../../components/home/Nav";

const Home = () => {
  const user = useOutletContext();

  return (
    <div className="min-h-screen bg-primary text-secondary grid grid-cols-[1fr_minmax(300px,600px)_1fr] items-start">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Home;
