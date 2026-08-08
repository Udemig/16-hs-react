import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "./../../utils/constants";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { BookmarkMinus } from "lucide-react";
import { toggleWatchlist } from "../../redux/actions";

const WatchList = () => {
  const dispatch = useDispatch();
  const { loading, error, watchlist } = useSelector((store) => store);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-red-500">İzleme Listesi</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-5 my-10">
          {watchlist.map((movie) => (
            <div key={movie.id} className="group relative">
              <button
                onClick={() => dispatch(toggleWatchlist(movie, false))}
                className="absolute top-3 inset-e-3 bg-red-500 p-2 rounded-lg z-10 hover:scale-110 shadow-lg shadow-red-500/50 place-items-center hidden group-hover:grid transition duration-300"
              >
                <BookmarkMinus />
              </button>

              <Link to={`/movie/${movie.id}`}>
                <img
                  src={BASE_IMG_URL + movie.poster_path}
                  alt={movie.title}
                  className="rounded-xl shadow-lg group-hover:scale-105 object-cover group-hover:shadow-2xl group-hover:shadow-white/20 transition duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
