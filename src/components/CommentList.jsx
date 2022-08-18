import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComment } from "../redux/modules/commentsSlice";
import styled from "styled-components";
import Comment from "../components/Comment";
import { Container } from '@mui/material';

export default function CommentList() {

  const dispatch = useDispatch();
  const {comments} = useSelector((state) => state.commentsSlice);

    useEffect(() => {dispatch(__getComment(comments.id));
    }, [dispatch, comments.id]);

  return (
    <Container fixed style={{padding: '4%', backgroundColor:'#D9D9D9'}}>
      <StCommentList>
        {comments.map((comments) => {
          return <Comment key={comments.id} comments = {comments}/>
        })}
      </StCommentList>
    </Container>
  );
}

const StCommentList = styled.div`
  width: 98%;
  height: 100%;
  border: 1px solid black;
  margin-top: 0%;
  border-radius: 2px;
  padding: 1%;
  padding-bottom: 5%;
  background-color: white;
`;
