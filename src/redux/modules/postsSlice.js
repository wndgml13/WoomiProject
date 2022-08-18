import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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



// // export const __getPosts = createAsyncThunk(
// //   "posts/getPosts",
// //   async (payload, thunkAPI) => {
// //     try {
// //       const data = await axios.get("http://localhost:3001/posts");
// //       console.log(data);
// //       return thunkAPI.fulfillWithValue(data.data);
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error);
// //     }
// //   }
// // );

// const initialState = {
//   posts: 0,
// };

// const postsSlice = createSlice({
//   name: "posts",
//   initialState
//     // posts: [],
//     // isLoading: false,
//     // error: null,
//   ,
//   reducers: {
//   },
//   // extraReducers: (builder) => {
//   //   builder
//   //   .addCase(__getPosts.pending, (state, action) => {
//   //     state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
//   //   });
//   //   builder.addCase(__getPosts.fulfilled, (state, action) => {
//   //     state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
//   //     state.posts = action.payload; // Store에 있는 Posts에 서버에서 가져온 Posts를 넣습니다.
//   //   });
//   //   builder.addCase(__getPosts.rejected, (state, action) => {
//   //     state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
//   //     state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
//   //   });
//   // }
// });

// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const {} = postsSlice.actions;


    
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postsSlice.reducer;