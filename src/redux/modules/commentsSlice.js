import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

//코멘트 가져오기 --> 완료!(고민할 내용 있긴 함)
export const __getComment = createAsyncThunk(
    "comments/__getComment",
    async (payload, thunkAPI) => {
        try{
            const data = await axios.get ("http://localhost:3001/posts");
            // console.log(data.data[0].comment) //코멘트 값 이렇게 가져와야 할 것 같은데 어떻게??
            // console.log(data.data[0].id) //데이터의 포스트(게시글) 아이디 값
            //console.log(data.data[0].comment)
            return thunkAPI.fulfillWithValue(data.data[0].comment);
        } catch (error) {
            return thunkAPI.rejectWithValue(error); 
        }
    }
);

//코멘트 작성하기
export const __addComment = createAsyncThunk(
  "comments/__addComment",
  async (payload, thunkAPI) => {
      try{
          const data = await axios.post  ('http://jdh3340.shop/api/board/es/2');
          return thunkAPI.fulfillWithValue(data.data[0].comment);
      } catch (error) {
          return thunkAPI.rejectWithValue(error); 
      }
  }
);

//코멘트 삭제하기 -> JSON만해결되면 구현
export const __deleteComment = createAsyncThunk(
  "comments/__deleteComment",
  async (payload, thunkAPI) => {
      try{
          const data = await axios.delete (`http://localhost:3001/posts/1/comment/${payload}`); //payload가 잘 안됨
          console.log(payload)
          return thunkAPI.fulfillWithValue(data.data[0].comment);

      } catch (error) {
          return thunkAPI.rejectWithValue(error); 
      }
  }
);

//코멘트 수정하기
export const __editComment = createAsyncThunk(
  "comments/__editComment",
  async (payload, thunkAPI) => {
      try{
          const data = await axios.patch ("http://localhost:3001/posts");
          return thunkAPI.fulfillWithValue(data.data[0].comment);
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

    [__getComment.fulfilled]: (state, action)=>{
        state.isLoading = false;// 네트워크 요청이 끝났으니, false로 변경합니다.
        state.comments = action.payload;// Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },

    [__getComment.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;