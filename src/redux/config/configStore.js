import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";
import posts from "../modules/postsSlice";
import mypage from "../modules/mypageSlice";

const store = configureStore({
  reducer: {commentsSlice, posts, mypage },

});

export default store;