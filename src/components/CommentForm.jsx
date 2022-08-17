import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import commentsSlice, { __addComment} from "../redux/modules/commentsSlice";

export default function CommentForm() {
  const {comments} = useSelector((state) => state.commentsSlice);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const onChangeHandler=(e)=>{setContent(e.target.value)}

  const onSubmitHandler=()=>{
    var today = new Date();
    today.setHours(today.getHours()+9)
    const createdate = today.toISOString().replace('T', ' ').substring(0, 19);

    dispatch(
      __addComment({
        id: comments.length,
        content,
        //nickname,
        createdate
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