import styled from "styled-components";

export default function PostsColumn() {
  return (
    <PostForm>
      <PostLabel>ID</PostLabel>
      <PostLabel>유형</PostLabel>
      <PostLabel>제목</PostLabel>
      <PostLabel>작성자</PostLabel>
      <PostLabel>날짜</PostLabel>
    </PostForm>
  );
}

const PostForm = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  border-spacing: 0;
  justify-content: space-around;
  background-color: #58bfc1;
  border-radius: 10px;
  display: flex;
  border-bottom: 2px solid #e8e8e8;
  padding: 10px 5px;
`;

const PostLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  font-family: "Patua One", cursive;
  color: #fff;
`;
