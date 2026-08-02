import api from "../../utils/api";
import AT from "./actionTypes";

// redux thunk aksiyonu
// sepetteki ürünler için api'a istek atp reducer'a haber vericek
export const getCart = () => (dispatch) => {
  dispatch({ type: AT.CART_LOADING });

  api
    .get("/cart")
    .then((res) => dispatch({ type: AT.CART_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: AT.CART_ERROR, payload: err.message }));
};

// ürünü sepete ekle
export const addToCart = (product) => (dispatch) => {
  // 1) api'a gönderilecek veriyi hazırla
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  // 2) api'a eklemek için istek at
  api
    .post("/cart", newItem)
    // 3) istek başarılı olursa reducer'a haber ver
    .then((res) => dispatch({ type: AT.ADD_TO_CART, payload: res.data }))
    .catch(() => alert("bir sorun oluştu"));
};

// ürün miktarını güncelle
export const updateAmount = (productId, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${productId}`, { amount: newAmount })
    .then((res) => dispatch({ type: AT.UPDATE_AMOUNT, payload: res.data }));
};

// ürün kaldır
export const deleteFromCart = (productId) => (dispatch) => {
  api
    .delete(`/cart/${productId}`)
    .then(() => dispatch({ type: AT.DELETE_FROM_CART, payload: productId }))
    .catch(() => alert("işlem başarısızs"));
};
