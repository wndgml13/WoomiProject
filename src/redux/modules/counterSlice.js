// src/redux/modules/counterSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  posts:[{  "id": 1,
  "title": "초기값",
  "content": "테스트 내용",
  "username": "이순신",
  "nickname": "충무공",
  "createDate": "2022-08-12 12:00:00"}],
  isLoading: false,
  error:null,
};


//포스트 가져오기
const counterSlice = 

createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      setPosts([
        ...postMessage,
        {id: posts.length,
        title: '일단 예시',
        content: '일단 예시2'}
      ])
      }},

    deletePosts: (state, action) => {
      const newPosts =
      posts.filter((posts)=>posts.id !==id);
      setPosts(newPosts)
    },
  });

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addPosts, deletePosts } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;