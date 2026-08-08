import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchlist } from "../../redux/actions";

const WatchListButton = ({ movie }) => {
  const dispatch = useDispatch();

  // izleme listesine abone ol
  const { watchlist } = useSelector((store) => store);

  // prop olarak gelen film izleme listesinde var mı?
  const isAdded = watchlist.find((item) => item.id === movie.id);

  return (
    <button
      onClick={() => dispatch(toggleWatchlist(movie, !isAdded))}
      className="hero-btn from-blue-600 to-blue-700"
    >
      {isAdded ? (
        <>
          <Minus className="size-5" />
          Listeden Kaldır
        </>
      ) : (
        <>
          <Plus className="size-5" />
          Listeye Ekle
        </>
      )}
    </button>
  );
};

export default WatchListButton;
