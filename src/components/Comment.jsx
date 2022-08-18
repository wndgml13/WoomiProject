import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __deleteComment, __editComment } from "../redux/modules/commentsSlice";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Comment({ comments }) {
  const dispatch = useDispatch();
  const { boardname, id } = useParams();
  const text = comments.content;
  const commentId = comments.id;

  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(text);
  let [modalDelete, setModalDelete] = useState(false);

  // useEffect(() => {
  //   dispatch(
  //     __getComment({
  //       boardname,
  //       id,
  //     })
  //   );
  // }, [dispatch, boardname, id]);

  const onClickDeleteButtonHandler = () => {
    dispatch(
      __deleteComment({
        boardname,
        id,
        commentId,
      })
    );
  };

  const onEditHandler = () => {
    if (isEditable === true) {
      setIsEditable(false);
      dispatch(__editComment({ content, boardname, id, commentId }));
      setContent(content);
    } else {
      setIsEditable(true);
      setContent(comments.content);
    }
  };

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  var today = new Date();
  today.setHours(today.getHours() + 9);
  const createAt = today.toISOString().replace("T", " ").substring(0, 10);
  console.log(createAt);

  return (
    <StCommentList>
      <span>
        <b>{comments.nickname}</b>
      </span>
      <span>{comments.createAt}</span>
      {isEditable === true ? (
        <input type="text" value={content} onChange={onChangeHandler}></input>
      ) : (
        <div>{comments.content}</div>
      )}
      <button onClick={onEditHandler}>수정</button>
      <button
        onClick={() => {
          setModalDelete(modalDelete === false ? true : false);
        }}
      >
        삭제
      </button>
      {modalDelete === true ? (
        <DeleteModal
          delModal={setModalDelete}
          onClickDeleteButtonHandler={onClickDeleteButtonHandler}
        />
      ) : null}
    </StCommentList>
  );
}

function DeleteModal(props) {
  return (
    <div className="Modal">
      정말 삭제하시겠습니까?
      <button onClick={props.onClickDeleteButtonHandler}>삭제</button>{" "}
      <button
        onClick={() => {
          props.delModal(false);
        }}
      >
        취소
      </button>
    </div>
  );
}

const StCommentList = styled.div`
  width: 600px;
  height: 50px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 20px;
`;
