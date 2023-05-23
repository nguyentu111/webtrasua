import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import login1 from "~/services/authencation";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (params, thunkApi) => {
    // const currentUser = await userApi.getMe();
    //params là số điện thoại và password
    //const currentUser = await login(params);
    console.log(params);
    //return { ...currentUser, phoneNumber: currentUser.phone_number };
  }
);
const initialState = {
  current: {},
  loading: false,
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.current = {
        status: "success",
        msg: "Đăng nhập thành công.",
        information: {
          id: 1,
          name: "Trần Văn C",
          gender: 0,
          phoneNumber: "0111222333",
          dob: null,
          addresses: [
            {
              id: 1,
              address:
                "90 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
            },
            {
              id: 2,
              address:
                "91 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
            },
            {
              id: 3,
              address:
                "92 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
            },
            {
              id: 4,
              address:
                "93 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
            },
            {
              id: 5,
              address:
                "94 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
            },
          ],
          active: 1,
        },
        roleUser: {
          id: 6,
          name: "Khách hàng",
        },
        token: "20|nXLZEk8EuAoZXLT094AvKuHeHZ94ps5eDzHHLiw5",
      };
      state.loading = false;
      state.error = "";
    },
    logout: (state, action) => {
      state.current = {};
      state.loading = false;
      state.error = "";
    },
    register_complete: (state, action) => {
      state.current = { ...state.current, status: "true" };
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
      console.log(action.payload);
    },
  },
});
const { reducer, actions } = userSlice;
export const logout = actions.logout;
export const login = actions.login;
export const register_complete = actions.register_complete;
export default reducer;
