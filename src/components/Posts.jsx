import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCookieToken } from "../storage/Cookie";

export default function Posts() {
  const { boardname } = useParams();
  const [info, setInfo] = useState(null);

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
  }, []);

  if (boardname === "all") {
    return (
      <>
        {searchText.search?.map((infos) => {
          return (
            <List_Container key={infos.id}>
              <Post_List>{infos.id}</Post_List>
              <Post_List>{infos.boardName}</Post_List>
              <Post_List>
                <Link to={`/${boardname}/detail/${infos.id}`}>
                  {infos.title}
                </Link>
              </Post_List>
              <Post_List>{infos.nickname}</Post_List>
              <Post_List>{infos.createAt}</Post_List>
            </List_Container>
          );
        })}
        <Post_btn
          onClick={() => {
            if (getCookieToken()) {
              navigate(`/${boardname}/addposts`);
            }
          }}
        >
          글쓰기
        </Post_btn>
      </>
    );
  } else {
    return (
      <>
        {info?.map((infos) => {
          return (
            <List_Container key={infos.id}>
              <Post_List>{infos.id}</Post_List>
              <Post_List>{infos.boardName}</Post_List>
              <Post_List>
                <Link to={`/${boardname}/detail/${infos.id}`}>
                  {infos.title}
                </Link>
              </Post_List>
              <Post_List>{infos.nickname}</Post_List>
              <Post_List>{infos.createAt}</Post_List>
            </List_Container>
          );
        })}
        <Post_btn
          onClick={() => {
            if (getCookieToken()) {
              navigate(`/${boardname}/addposts`);
            }
          }}
        >
          글쓰기
        </Post_btn>
      </>
    );
  }
}

const List_Container = styled.div`
  justify-content: space-between;
  display: flex;
  width: 70%;
  margin: 0 auto;
`;

const Post_List = styled.label`
  width: 70%;
  text-align: center;
  font-size: 16px;
  border-bottom: 2px solid #e8e8e8;
  padding: 10px 5px;
  font-weight: bold;
`;

const Post_btn = styled.button`
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
  font-family: "Patua One", cursive;
  color: #fff;
  font-size: 20px;
`;
