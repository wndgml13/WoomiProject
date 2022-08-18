import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import {useParams} from "react-router-dom";
import { getCookieToken } from "../storage/Cookie";
import { Container } from '@mui/material';
import { margin } from "@mui/system";
import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

export default function DetailPosts() {

  const config = {
    headers: { Authorization: getCookieToken() },
    };

  const [posts, setPosts] =useState(null);

  const fetchPosts = async () => {
    const data  = await axios.get("http://jdh3340.shop/api/board/es/id/1"); //프론트엔드끼리할것
    setPosts(data.data.data)};
    
    useEffect(()=>{fetchPosts()},[]);
  
  const navigate = useNavigate();
  let [modalDelete, setModalDelete] = useState(false);

  const onClickDeleteButtonHandler = async(postId) => {
    await axios.delete(`http://jdh3340.shop/api/board/es/id/1`, config)
    navigate("/postscontainer/es")
  };

return (
    <Container fixed style={{padding: '4%', backgroundColor:'#D9D9D9'}}>
      <h4 style={{fontSize: 20}}>ISXX게시판: ISXX에 대해 자유롭게 이야기를 나눠주세요!</h4>
          {posts !== null? 
          <StBoard>
            <div key={posts.id}>
              <h3 className="Title" style={{marginBottom: "0%"}}>제목: {posts.title}</h3></div>
              <div className="Username"style={{marginBottom: "3%"}}>닉네임: {posts.nickname} {posts.createAt}</div>
            <div style={{padding: '2%', backgroundColor:'#D9D9D9'}} className="Content">{posts.content}</div>
            <div className='buttons' style={{float: "right", margin: "3%"}}> 
              <Button onClick={()=>navigate("/editposts/:id")}>수정</Button>
              <Button onClick={()=>{setModalDelete(modalDelete==false?true:false)}}>삭제</Button>
              {modalDelete==true?<DeleteModal delModal={setModalDelete} onClickDeleteButtonHandler={onClickDeleteButtonHandler}/>:null}
            </div>
          </StBoard>
          :null}
    </Container>
)}

function DeleteModal(props){
  return(
    <StModal>
      <div className="Modal">
          <div>정말 삭제하시겠습니까?</div>
          <Button2 style={{float: "right", marginRight: "2%", marginTop:"1%"}} onClick={props.onClickDeleteButtonHandler}>삭제</Button2> 
          <Button2 style={{float: "right", marginRight: "2%", marginTop:"1%"}} onClick={()=>{props.delModal(false)}}>취소</Button2> 
      </div>
    </StModal>)
}
const StBoard = styled.div`
  width: 95%;
  height: 100%;
  border: 1px solid black;
  border-radius: 2px;
  padding: 1%;
  padding-bottom: 8%;
  padding-left: 3%;
  padding-right: 3%;
  background-color: white;
`;

const StModal = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px;
  background-color: white;
`;

const Button = styled.button`
  border: none;
  background-color: #229C94;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
  margin-left: 5px;
  margin-right: "2%";
  margin-top:"1%";
`;

const Button2 = styled.button`
  border: none;
  background-color: #8fa5a4;
  padding: 8px 16px;
  border-radius: 5px;
  color: #444444;
`;