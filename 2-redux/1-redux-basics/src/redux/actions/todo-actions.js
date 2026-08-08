import axios from "axios";
import ACTION_TYPES from "./action-types";

// Aksiyon Oluşturan Fonksiyon
// Bu fonksiyonlar sayesinde bileşen içerisindeki aksiyon yazımını daha pratij hale getiririz
// export const toggleTodo = (payload) => ({ type: ACTION_TYPES.TOGGLE, payload });
// export const deleteTodo = (payload) => ({ type: ACTION_TYPES.DELETE, payload });
// export const createTodo = (payload) => ({ type: ACTION_TYPES.CREATE, payload });

/*
 ! Thunk Aksiyonu
 * İki fonksiyonu iç içe yazarız
 * İçerideki fonksiyon asenkron olabilir ve dispatch'i parametre olarak alır
 * Bu sayede fonksiyon içerisinde hem api isteği atabiliyor hem de dispatch ile reducer'a haber verebiliyoruz
 */

export const getTodos = () => async (dispatch) => {
  dispatch({ type: ACTION_TYPES.LOADING });

  axios
    .get("http://localhost:4000/todos")
    .then((res) => dispatch({ type: ACTION_TYPES.SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ACTION_TYPES.ERROR, payload: err.message }));
};

export const createTodo = (newTodo) => async (dispatch) => {
  axios
    .post("http://localhost:4000/todos", newTodo)
    .then(() => dispatch({ type: ACTION_TYPES.CREATE, payload: newTodo }))
    .catch(() => alert("işlem başarısız oldu"));
};

export const deleteTodo = (id) => async (dispatch) => {
  axios
    .delete(`http://localhost:4000/todos/${id}`)
    .then(() => dispatch({ type: ACTION_TYPES.DELETE, payload: id }))
    .catch(() => alert("işlem başarısız oldu"));
};

export const toggleTodo =
  ({ id, isDone }) =>
  (dispatch) => {
    axios
      .patch(`http://localhost:4000/todos/${id}`, { isDone })
      .then(() => dispatch({ type: ACTION_TYPES.TOGGLE, payload: id }))
      .catch(() => alert("işlem başarısız oldu"));
  };
