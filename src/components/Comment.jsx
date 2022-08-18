import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComment, editComment, __addComment, __deleteComment, __editComment} from "../redux/modules/commentsSlice";
import styled from "styled-components";

export default function Comment({comments}) {

  const dispatch = useDispatch();
  const text = comments.content
  const id = comments.id

  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(text);
  let [modalDelete, setModalDelete] = useState(false);

  useEffect(() => {
    dispatch(__getComment());
    }, setContent);

  const onClickDeleteButtonHandler = () => {
    dispatch(__deleteComment(id))
  };

  const onEditHandler = ()=>{
    if(isEditable===true){
      setIsEditable(false);
      dispatch(__editComment({content}));
      setContent(content);
      // console.log(content)
    }else{
    setIsEditable(true);
    setContent(comments.content)
  }}

  const onChangeHandler = (e) => {
    setContent(e.target.value);
    console.log(e.target.value)
  };

  var today = new Date();
  today.setHours(today.getHours()+9)
  const createAt = today.toISOString().replace('T', ' ').substring(0, 10);
  console.log(comments.createAt)
  
  return (
    <StCommentList>
      <span><b>{comments.nickname}</b></span>
      <span>{comments.createAt}</span>
      {isEditable===true?(
        <input type="text" value={content} onChange={onChangeHandler}></input>
      ):(<div>{comments.content}</div>)}
      <button onClick={onEditHandler}>수정</button>
      <button onClick={()=>{setModalDelete(modalDelete==false?true:false)}}>삭제</button>
        {modalDelete==true?<DeleteModal delModal={setModalDelete} onClickDeleteButtonHandler={onClickDeleteButtonHandler}/>:null}
    </StCommentList>
  );
}

function DeleteModal(props){
  return(
  <div className="Modal">
          정말 삭제하시겠습니까? 
          <button onClick={props.onClickDeleteButtonHandler}>삭제</button> <button onClick={()=>{props.delModal(false)}}>취소</button>
  </div>)
}

const StCommentList = styled.div`
  width: 600px;
  height: 50px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 20px;
`;