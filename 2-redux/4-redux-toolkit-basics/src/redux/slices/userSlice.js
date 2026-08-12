import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// klasik reduxta
const thunkAksiyonu = () => async (dispatch) => {
  dispatch({ type: "USERS_LOADING" });

  axios
    .get("https://dummyjson.com/users")
    .then((res) => dispatch({ type: "USERS_SUCCESS", payload: res.data }))
    .catch((err) => dispatch({ type: "USERS_ERROR", payload: err.message }));
};

/*
 * createAsynThunk ile asenkron thunk aksiyonu oluşturabiliz
 * reducer'a haber verme işlemi otomatik olarak gerçekleşir (pending | rejected | fulfilled)
 * parametreler
 * 1) aksiyonun tipi
 * 2) aksiyonun payload'ını return eden fonksiyon
 */

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  // api isteğini at
  const res = await axios.get("https://dummyjson.com/users");

  // aksiyonun payload'ı return edilir
  return res.data.users;
});

const userSlice = createSlice({
  name: "user",
  initialState: { loading: true, error: null, users: [] },
  // senkron aksiyonları yönetmek için
  reducers: {},
  // asenkron aksiyonları yönetmek için
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;
