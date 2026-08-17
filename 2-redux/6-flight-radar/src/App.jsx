import { useEffect } from "react";
import Header from "./components/header";
import Map from "./components/map";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const id = setInterval(() => {
    dispatch(getFlights());
    // }, 3000);

    // return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Header />

      <Map />
    </div>
  );
};

export default App;
