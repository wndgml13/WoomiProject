// src/redux/modules/postsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

const initialState = {
  posts:[],
  isLoading: false,
  error:null,
};

//포스트 가져오기
// export const getPosts = createAsyncThunk(
//     'posts/getPosts',
//     async (payload,thunkAPI) => {
//         try{
//             const data = await axios.get("http://localhost:3001/posts");
//             return thunkAPI.fulfillWithValue(data.data);
//         }catch(error){
//             return thunkAPI.rejectWithValue(error);
//         }
//         });

//포스트 삭제하기(추가예정)
export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    // extraReducers:{
    //   [getPosts.fulfilled]:(state,action)=>{
    //     state.posts=action.payload
    //   }}
    })

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postsSlice.reducer;