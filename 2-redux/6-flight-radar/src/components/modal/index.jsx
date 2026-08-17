import { useDispatch, useSelector } from "react-redux";
import Aircraft from "./Aircraft";
import Airport from "./Airport";
import Gallery from "./Gallery";
import Head from "./Head";
import Time from "./Time";
import { useEffect } from "react";
import { getDetails } from "../../redux/actions";
import Loader from "../loader";
import Error from "../error";

const Modal = ({ detailId, close }) => {
  if (!detailId) return;

  const dispatch = useDispatch();

  const { loading, error, info } = useSelector((store) => store.detailReducer);

  useEffect(() => {
    dispatch(getDetails(detailId));
  }, [detailId]);

  return (
    <div className="fixed top-0 left-0 h-screen flex items-center z-9999999! max-sm:justify-center max-sm:inset-0 max-sm:backdrop-blur-xs">
      <div className="w-90 max-sm:w-[70%] min-h-9/12 ml-4 gradient text-white rounded-3xl flex flex-col p-5 shadow-2xl mt-10 overflow-y-auto">
        <Head loading={loading} error={error} info={info} close={close} />

        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <div className="flex-1 flex flex-col gap-5 mt-5 justify-between">
            <div className="flex flex-col gap-5">
              <Gallery images={info?.aircraft?.images} />
              <Airport airportData={info?.airport} />
              <Time timeData={info?.time} />
            </div>

            <Aircraft aircraftData={info?.aircraft} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
