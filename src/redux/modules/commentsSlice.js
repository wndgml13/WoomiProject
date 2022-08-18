import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

const config = {
  headers: { Authorization: getCookieToken() },
};

const initialState = {
  comments: [],
  isLoading: false,
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
    console.log("asofjaoisdfjaosijf", payload);
    try {
      const data = await axios.put(
        `http://jdh3340.shop/api/board/${payload.boardname}/id/${payload.id}/comment/${payload.commentId}`,
        payload.content,
        config
      );
      console.log(data);
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
    },

    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },

    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
