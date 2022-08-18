import {useEffect, useState, useSelector} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
// import { __getPosts } from "../redux/modules/postsSlice";
import React, { useDispatch } from "react-redux";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

// http://jdh3340.shop/api/board/es


export default function Posts() {
  // const param = useParams();
  const [info, setInfo] = useState(null);
  // console.log(param);

  const navigate = useNavigate();
  
  const fetchInfo = async () => {
    const {data} = await axios.get('http://localhost:3001/posts'); // ${boadname}
    setInfo(data);
  }

  useEffect(() => {
    fetchInfo();
  }, []);
  
  return (
    <>
      {info?.map(infos => {
          return (
          <List_Container>
            <Post_List >{infos.id}</Post_List>
            <Post_List >
              <Link to="/Detail">
              {infos.title}
              </Link>
              </Post_List>
            <Post_List>{infos.username}</Post_List>
            <Post_List>{infos.date}</Post_List>
          </List_Container>
          );
        })}
          <Post_btn 
            onClick={() => {
              navigate("/Addpost");
            }}>글쓰기</Post_btn>
    </>
  );
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
   box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
  font-family: 'Patua One', cursive;
  color:#fff;
  font-size: 20px;
  
`;