import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

const config = {
  headers: { Authorization: getCookieToken() },
};

const initialState = {
  comments: [],
  isLoading: false,
  isFinish: false,
  error: null,
};

//코멘트 가져오기 --> 닉네임과 createDate 가져오는거 백엔드에 문의??
export const __getComment = createAsyncThunk(
  "comments/__getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://jdh3340.shop/api/board/${payload.boardname}/id/${payload.id}`
      );
      return thunkAPI.fulfillWithValue(data.data.data.comments);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//코멘트 작성하기
export const __addComment = createAsyncThunk(
  "comments/__addComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `http://jdh3340.shop/api/board/${payload.boardname}/id/${payload.id}/comment`,
        payload,
        config
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.comment);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comments/__deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `http://jdh3340.shop/api/board/${payload.boardname}/id/${payload.id}/comment/${payload.commentId}`,
        config
      );
      return thunkAPI.fulfillWithValue(data.data.comment);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//코멘트 수정하기
export const __editComment = createAsyncThunk(
  "comments/__editComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put(
        `http://jdh3340.shop/api/board/${payload.boardname}/id/${payload.id}/comment/${payload.commentId}`,
        payload.content,
        config
      );
      return thunkAPI.fulfillWithValue(data.data.comment);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      state.isFinish = false;
    },

    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isFinish = true;
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },

    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isFinish = true;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export default commentsSlice.reducer;
