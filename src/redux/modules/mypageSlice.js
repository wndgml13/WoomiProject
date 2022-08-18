import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

const config = {
  headers: { Authorization: getCookieToken() },
};

const initialState = {
  mypage: {},
  isFinish: false,
  isLoading: false,
  error: null,
};

export const __getMypage = createAsyncThunk(
  "mypage/getMypage",

  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://jdh3340.shop/api/user", config);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMypage.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      state.isFinish = false;
    },
    [__getMypage.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.mypage = action.payload; // Store에 있는 Mypage에 서버에서 가져온 Mypage를 넣습니다.
      state.isFinish = true;
    },
    [__getMypage.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      state.isFinish = true;
    },
  },
});

// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default mypageSlice.reducer;
