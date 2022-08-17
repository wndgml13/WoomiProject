import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComment } from "../redux/modules/commentsSlice";
import styled from "styled-components";
import Comment from "../components/Comment";

export default function CommentList() {

  const dispatch = useDispatch();
  const {comments} = useSelector((state) => state.commentsSlice);

    useEffect(() => {dispatch(__getComment(comments.id));
    }, [dispatch, comments.id]);

  return (
    <>
      {comments.map((comments) => {
        return <Comment key={comments.id} comments = {comments}/>
      })}
    </>
  );
}
