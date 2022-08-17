import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComment, editComment, __addComment, __deleteComment, __editComment} from "../redux/modules/commentsSlice";
import styled from "styled-components";

export default function Comment({comments}) {

  const dispatch = useDispatch();
  const text = comments.content
  const id = comments.id

  const [isEditable, setIsEditable] = useState(false);
  const [editContent, setEditContent] = useState(text);

  useEffect(() => {
    dispatch(__getComment());
    }, [dispatch]);

  const onClickDeleteButtonHandler = (id) => {
    dispatch(__deleteComment(id))};
    
  const onEditHandler = ()=>{
    if(isEditable===true){
      setIsEditable(false);
      dispatch(__editComment({id, text}));
    }else{
    setIsEditable(true);
    setEditContent(comments.content)
  }}

  const onChangeHandler = (e) => {
    setEditContent(e.target.value);
    console.log(e.target.value)
  };
  
  return (
    <StCommentList>
      <span><b>{comments.nickname}</b></span>
      <span>{comments.createDate}</span>
      {isEditable===true?(
        <input type="text" value={editContent} onChange={onChangeHandler}></input>
      ):(<div>{comments.content}</div>)}
      <button onClick={onEditHandler}>수정</button>
      <button onClick={()=>onClickDeleteButtonHandler(comments.id)}>삭제</button>
    </StCommentList>
  );
}

const StCommentList = styled.div`
  width: 600px;
  height: 50px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 20px;
`;