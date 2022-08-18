import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComment } from "../redux/modules/commentsSlice";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";

export default function CommentList() {
  const dispatch = useDispatch();
  const param = useParams();
  const { comments, isFinish } = useSelector((state) => state.commentsSlice);

  useEffect(() => {
    dispatch(__getComment(param));
  }, [dispatch, param]);

  if (isFinish) {
    return (
      <>
        {comments?.map((comment) => {
          return <Comment key={comment.id} comments={comment} />;
        })}
      </>
    );
  }
}
