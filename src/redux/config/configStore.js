import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";
import posts from "../modules/postsSlice";
import mypage from "../modules/mypageSlice";
import searchSlice from "../modules/searchSlice";

const store = configureStore({
  reducer: { commentsSlice, posts, mypage, searchSlice },
});

export default store;
