import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import React, { useSelector } from "react-redux";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCookieToken } from "../storage/Cookie";

export default function Posts() {
  const [info, setInfo] = useState(null);
  const { boardname } = useParams();
  const navigate = useNavigate();

  const searchText = useSelector((state) => state.searchSlice);

  const fetchInfo = async () => {
    const data = await axios.get(
      `http://jdh3340.shop/api/board/${boardname}/all`
    );

    setInfo(data.data.data);
  };

  useEffect(() => {
    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (boardname === "all") {
    return (
      <>
        {searchText.search?.map((infos) => {
          return (
            <ListContainer key={infos.id}>
              <PostList>{infos.id}</PostList>
              <PostList>{infos.boardName}</PostList>
              <PostList>
                <Link to={`/${boardname}/detail/${infos.id}`}>
                  {infos.title}
                </Link>
              </PostList>
              <PostList>{infos.nickname}</PostList>
              <PostList>{infos.createAt}</PostList>
            </ListContainer>
          );
        })}
        <Postbtn
          onClick={() => {
            if (getCookieToken()) {
              navigate(`/${boardname}/addposts`);
            }
          }}
        >
          글쓰기
        </Postbtn>
      </>
    );
  } else {
    return (
      <>
        {info?.map((infos) => {
          return (
            <ListContainer key={infos.id}>
              <PostList>{infos.id}</PostList>
              <PostList>{infos.boardName}</PostList>
              <PostList>
                <Link to={`/${boardname}/detail/${infos.id}`}>
                  {infos.title}
                </Link>
              </PostList>
              <PostList>{infos.nickname}</PostList>
              <PostList>{infos.createAt}</PostList>
            </ListContainer>
          );
        })}
        <Postbtn
          onClick={() => {
            if (getCookieToken()) {
              navigate(`/${boardname}/addposts`);
            }
          }}
        >
          글쓰기
        </Postbtn>
      </>
    );
  }
}

const ListContainer = styled.div`
  justify-content: space-between;
  display: flex;
  width: 70%;
  margin: 0 auto;
`;

const PostList = styled.label`
  width: 70%;
  text-align: center;
  font-size: 16px;
  border-bottom: 2px solid #e8e8e8;
  padding: 10px 5px;
  // font-weight: bold;
  font-style: italic;
  background-color: #d9d9d9;
  // color: red;
  border-radius: 10px;
`;

const Postbtn = styled.button`
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 10px;
  margin: 50px;
  border: none;
  position: absolute;
  cursor: pointer;
  content: "";
  right: 0;
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.9),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
  transition: all 0.3s ease;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  bottom: auto;
`;
