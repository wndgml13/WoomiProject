import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import commentsSlice, { __getComment, __addComment} from "../redux/modules/commentsSlice";

export default function CommentForm() {
  const {comments} = useSelector((state) => state.commentsSlice);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  //코멘트 작성 후 페이지 업데이트
  useEffect(() => {
    dispatch(__getComment());
    }, setContent);

  const onChangeHandler=(e)=>{setContent(e.target.value)}

  const onSubmitHandler=()=>{
    // var today = new Date();
    // today.setHours(today.getHours()+9)
    // const createAt = today.toISOString().replace('T', ' ').substring(0, 10);

    dispatch(
      __addComment({
        id: comments.length,
        content,
        // nickname,
        // createAt
      })
    ); setContent("");}

  return (
    <StCommentInput>
      댓글입력(아이디 불러와야함)
      <input type="text" name="content" value={comments.content} onChange={onChangeHandler}/>
      <button onClick={onSubmitHandler}>댓글쓰기</button>
    </StCommentInput>
  );
}
const StCommentInput = styled.div`
  width: 600px;
  height: 50px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 20px;
`;

