import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import commentsSlice, { __getComment, __addComment} from "../redux/modules/commentsSlice";
import { Container, TextField } from "@mui/material";

export default function CommentForm() {
  const { comments } = useSelector((state) => state.commentsSlice);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const param = useParams();
  console.log(comments, content);
  //코멘트 작성 후 페이지 업데이트
  // useEffect(() => {
  //   dispatch(__getComment());
  // }, setContent);

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };


  const onSubmitHandler = () => {
    // var today = new Date();
    // today.setHours(today.getHours()+9)
    // const createAt = today.toISOString().replace('T', ' ').substring(0, 10);

    dispatch(__addComment(param));
    setContent("");
  };


  return (
  <Container>
    <StCommentInput>
      <div>
        <TextField placeholder="댓글을 입력해주세요" type="text" name="content" id="outlined-basic" variant="outlined" value={comments.content} onChange={onChangeHandler}/>
        <Button onClick={onSubmitHandler}>댓글쓰기</Button>
      </div>
    </StCommentInput>
  </Container>
  );
}
const StCommentInput = styled.div`
  background-color: #D9D9D9;
  width: 98%;
  height: 50px;
  margin-top: 0%;
  margin-left: 0%;
  padding: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 60px;
  float: "right";
  margin-right: "2%";
  margin-top:"1%";
  border: none;
  background-color: #224a48;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
  margin-left: 5px;
`;
