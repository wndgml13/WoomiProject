import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __deleteComment, __editComment } from "../redux/modules/commentsSlice";
import styled from "styled-components";
import { TextField } from "@mui/material";
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
      <div>
        <b>{comments.nickname}</b> {comments.createAt}{" "}
      </div>
      {isEditable === true ? (
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={content}
          onChange={onChangeHandler}
        />
      ) : (
        <div style={{ marginLeft: 10 }}>{comments.content}</div>
      )}

      <div>
        <Button onClick={onEditHandler}>수정</Button>
        <Button
          onClick={() => {
            setModalDelete(modalDelete == false ? true : false);
          }}
        >
          삭제
        </Button>
        {modalDelete == true ? (
          <DeleteModal
            delModal={setModalDelete}
            onClickDeleteButtonHandler={onClickDeleteButtonHandler}
          />
        ) : null}
      </div>
    </StCommentList>
  );
}

function DeleteModal(props) {
  return (
    <StModal>
      <div>
        <div>정말 삭제하시겠습니까?</div>
        <Button2
          style={{ float: "right", marginRight: "2%", marginTop: 1 }}
          onClick={props.onClickDeleteButtonHandler}
        >
          삭제
        </Button2>
        <Button2
          style={{ float: "right", marginRight: "2%", marginTop: 1 }}
          onClick={() => {
            props.delModal(false);
          }}
        >
          취소
        </Button2>
      </div>
    </StModal>
  );
}

const StCommentList = styled.div`
  float: "right";
  width: 100%;
  height: 50px;
  border-radius: 2px;
  padding: 20px;
  margin-bottom: 30px;
`;

const StModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 60px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px;
  background-color: white;
`;

const Button = styled.button`
  float: "right";
  margin-right: "2%";
  margin-top: "1%";
  border: none;
  background-color: #224a48;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
  margin-left: 5px;
`;

const Button2 = styled.button`
  border: none;
  background-color: #8fa5a4;
  padding: 8px 16px;
  border-radius: 5px;
  color: #444444;
`;
