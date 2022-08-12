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
        <Route path="detail/:id" element={<Detail />} />
        <Route path="detail/:id" element={<AddPost />} />
        <Route path="detail/:id" element={<EditPost />} />
        <Route path="detail/:id" element={<Login />} />
        <Route path="detail/:id" element={<MyPage />} />
        <Route path="detail/:id" element={<PostsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
