import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import AddPost from "./pages/AddPost";
import Detail from "./pages/Detail";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import PostsContainer from "./pages/PostsContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path=":boardname/detail/:id" element={<Detail />} />
        <Route path=":boardname/addposts" element={<AddPost />} />
        <Route path=":boardname/editposts/:id" element={<EditPost />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<MyPage />} />
        <Route path="postscontainer/:boardname" element={<PostsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
