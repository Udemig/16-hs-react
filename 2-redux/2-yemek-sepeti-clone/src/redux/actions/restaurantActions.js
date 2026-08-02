import AT from "../actions/actionTypes";
import api from "../../utils/api";

// Redux Thunk Aksiyonu
export const getRestaurants = () => async (dispatch) => {
  // yüklenme anında reducer'a haber ver
  dispatch({ type: AT.REST_LOADING });

  // api'a restoran verileri için istek at
  api
    .get("/restaurants")
    .then((res) => dispatch({ type: AT.REST_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: AT.REST_ERROR, payload: err.message }));
};
