import api from "./../utils/api";
import AT from "./action-types";

// redux thunk aksiyonları

// izleme listesindeki filmleri getirir
export const getWatchList = () => (dispatch) => {
  dispatch({ type: AT.LIST_LOADING });

  api
    .get("/account/19719088/watchlist/movies?sort_by=created_at.desc")
    .then((res) => dispatch({ type: AT.LIST_SUCCESS, payload: res.data.results }))
    .catch((err) => dispatch({ type: AT.LIST_ERROR, payload: err.message }));
};

// izleme listesine ekle/çıkar aksiyonu
export const toggleWatchlist = (movie, isAdd) => (dispatch) => {
  // api'a gönderilecek body'i hazırla
  const body = { media_type: "movie", media_id: movie.id, watchlist: isAdd };

  // api'a istek at
  api.post("/account/19719088/watchlist", body).then(() => {
    // ekleme/çıkarma duruma göre reducer'a haber ver
    isAdd
      ? dispatch({ type: AT.ADD_TO_LIST, payload: movie })
      : dispatch({ type: AT.REMOVE_FROM_LIST, payload: movie.id });
  });
};
