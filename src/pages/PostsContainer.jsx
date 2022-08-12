import PostsColumn from "../components/PostsColumn";
import PostsList from "../components/PostsList";

export default function PostsContainer() {
  console.log("상세페이지 -> 1.게시글 조회");
  return (
    <>
      <PostsColumn />
      <PostsList />
      <button>글쓰기</button>
    </>
  );
}
