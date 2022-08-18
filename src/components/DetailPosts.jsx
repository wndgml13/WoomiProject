import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCookieToken } from "../storage/Cookie";

export default function DetailPosts() {
  const config = {
    headers: { Authorization: getCookieToken() },
  };
  const { boardname, id } = useParams();

  // let {id} = useParams();

  //id 를 int로 / num 바꿔주기
  //  let findPosts = posts.find(x=> x.id == id);// useParams 정렬문제 해결

  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const data = await axios.get(
      `http://jdh3340.shop/api/board/${boardname}/id/${id}`
    ); //프론트엔드끼리할것
    setPosts(data.data.data);
  }; //이부분에 useParam 넣고 싶은데 안됨

  useEffect(() => {
    fetchPosts();
  }, []);

  const navigate = useNavigate();
  let [modalDelete, setModalDelete] = useState(false);

  const onClickDeleteButtonHandler = async (postId) => {
    await axios.delete(
      `http://jdh3340.shop/api/board/${boardname}/id/${id}`,
      config
    );
    navigate(`/postscontainer/${boardname}`);
  };

  return (
    <div className="Board">
      <h4>ISXX게시판 - ISXX만을 위한 게시판입니다.</h4>
      {posts !== null ? (
        <StBoard>
          <div key={posts.id}>
            <h3 className="Title">{posts.title}</h3>
          </div>
          <div className="Username">
            <b>{posts.nickname}</b> {posts.createDate}
          </div>
          <div className="Content">{posts.content}</div>
        </StBoard>
      ) : null}

      <div className="changeDelete">
        <button
          onClick={() => {
            if (getCookieToken()) {
              navigate(`/${boardname}/editposts/${id}`);
            }
          }}
        >
          수정
        </button>
        <button
          onClick={() => {
            if (getCookieToken()) {
              setModalDelete(modalDelete === false ? true : false);
            }
          }}
        >
          삭제
        </button>
        {modalDelete == true ? (
          <DeleteModal
            delModal={setModalDelete}
            onClickDeleteButtonHandler={onClickDeleteButtonHandler}
          />
        ) : null}
      </div>
    </div>
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
const StBoard = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 20px;
`;
