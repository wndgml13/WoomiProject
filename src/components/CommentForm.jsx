/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __addComment } from "../redux/modules/commentsSlice";
import { Container, TextField } from "@mui/material";
import { __getMypage } from "../redux/modules/mypageSlice";

export default function CommentForm() {
  const { comments } = useSelector((state) => state.commentsSlice);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const param = useParams();

  const { mypage } = useSelector((state) => state.mypage);

  useEffect(() => {
    dispatch(__getMypage());
  }, [dispatch]);

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

    const nick = mypage.data.nickname;
    console.log(comments, content, nick);
    dispatch(__addComment({ param, content, nick }));
    setContent("");
  };

  return (
    <Container fixed style={{ backgroundColor: "#D9D9D9", paddingBottom: 40 }}>
      <StCommentInput>
        <div>
          <TextField
            placeholder="댓글을 입력해주세요"
            type="text"
            name="content"
            id="outlined-basic"
            variant="outlined"
            onChange={onChangeHandler}
          />
          <Button onClick={onSubmitHandler}>댓글쓰기</Button>
        </div>
      </StCommentInput>
    </Container>
  );
}
const StCommentInput = styled.div`
  margin-left: 60%;
  width: 98%;
  height: 50px;
  padding: 1%;
`;

const Button = styled.button`
  width: 100px;
  height: 60px;
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
