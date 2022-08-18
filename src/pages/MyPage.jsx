// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styled from "styled-components";
import {useState} from "react";
import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { __getMypage } from "../redux/modules/mypageSlice"
import { useNavigate} from "react-router-dom";


import axios from "axios";
import {Table} from "react-bootstrap";
import { getCookieToken } from "../storage/Cookie";



export default function MyPage() {
  const { isFinish , isLoading, error, mypage } = useSelector((state) => state.mypage );
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 회원탈퇴 버튼 클릭 시 Main 페이지로 이동
  const [editnickname, setEditNickName] = useState(mypage?.nickname); // mypage.nickname을 초기값으로 준다
  const [nicknamemode, setNickNameMode] = useState(false);
  const [editpassword, setEditPassWord] = useState("");
  const [passwordmode, setPassWordMode] = useState(false);
  const [pastpassword, setpastpassword] = useState("");
  const [pastpasswordcheck, setPastPassWordCheck] = useState("");   // 재범님 비밀번호 재확인 스테이트 만든것을 비밀번호 재확인 상태 변경중입니다.
  
  
  const userinfo = {
        nickname: editnickname,
        password: editpassword,
        pastPassword: pastpassword
  }

const config = {
    headers: { Authorization: getCookieToken() },
    };
  
  const onClickEditNickName = async () => {
    if (nicknamemode) {
      if (pastpassword === pastpasswordcheck) {        // 재범님 비밀번호 재확인 스테이트 만든것을 비밀번호 재확인 상태 변경중입니다.
        setNickNameMode(false);
      const data = await axios.put('http://jdh3340.shop/api/user', userinfo, config); //http://jdh3340.shop/api/board/es/all
    console.log(data);
      }
      
    } else{
      console.log(mypage.password);
      setpastpassword(mypage.password);
      setNickNameMode(true);
    }
  } 
  const onClickEditPassWord = async () => {               
    if (passwordmode) {
      setPassWordMode(false);
      const data = await axios.patch('http://jdh3340.shop/api/user', {password:editpassword}, config);
      console.log(data);
    } else{
      setPassWordMode(true);
    }
  } 
  const onClickDelete = async () => {
    const data = await axios.delete('http://jdh3340.shop/api/user', config);
    console.log(data);
  }
  
  // {newpassword:editpassword}
  useEffect(() => {
    dispatch(__getMypage());
  }, [dispatch]);
  
  if (isLoading) {
    return <div>로딩 중..</div>;
  };

  if (error) {
    return <div>{error.message}</div>;
  };
  if (isFinish) {
    return <>
    <Page_Container>
      <Profile>회원정보 조회</Profile>
      <div>ID : {mypage.username}</div>

      <div>
      {nicknamemode ?
      <TextField
        type="text"
        id="outlined-basic" 
        label="새로운 닉네임" 
        variant="outlined"
        placeholder="새로운 닉네임"
        onChange={(e) => {
          
          setEditNickName(e.target.value);
        }}
        />
        : <div>닉네임 : {editnickname}</div>
      }
      </div>
      
      {passwordmode ?
      <div>
        <TextField
          type="text"
          id="outlined-basic" 
          label="기존 비밀번호" 
          variant="outlined"
          placeholder="기존 비밀번호"
          onChange={(e) => {
            setEditPassWord(e.target.value);
          }}
          />
        <TextField
          type="text"
          id="outlined-basic" 
          label="새로운 비밀번호" 
          variant="outlined"
          placeholder="새로운 비밀번호"
          onChange={(e) => {
            setpastpassword(e.target.value);
          }}
          />
          <TextField
          type="text"
          id="outlined-basic" 
          label="비밀번호 재확인" 
          variant="outlined"
          placeholder="비밀번호 재확인"
          onChange={(e) => {
            setPastPassWordCheck(e.target.value);  // 재범님 비밀번호 재확인 스테이트 만든것을 비밀번호 재확인 상태 변경중입니다.
          }}
          />
      </div>
        : ""
        
      }
    </Page_Container>
      <Button
        type="button"
        variant="outlined"
        onClick={ () => 
          {navigate("/"); 
        onClickDelete();}}>회원탈퇴
      </Button>
      {/* <div>{mypage?.map((todo)=>(
        <div key={todo.id}></div>
      ))}</div> */}
      <Button
        type="button"
        variant="outlined"
        onClick={() => onClickEditNickName(editnickname)}
        >닉네임 변경
      </Button>
      <Button
          type="button"
          variant="outlined"
          onClick={() => onClickEditPassWord(editpassword)}
        >비밀번호 변경
      </Button>
      
      
      
        
      
    </>
    
  };
};


const Page_Container = styled.div`
  // background-color: blue;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding: 70px;
`;

const Profile = styled.div`
background-color: blue;
width: 150px;
font-family: 'Patua One', cursive;
color:#fff;
font-size: 20px;
background-color: #58bfc1;
text-align: center;
border-radius: 10px;
padding: 10px;
font-weight:bold;
`;

const Edit_Delete_btn = styled.button`
float: right;
// flex-grow: 1;
// margin-left: auto;
// display: flex;
// justify-content: space-between;
// position: absolute;
cursor: pointer;
// content: "";
// right: 0;
// float-right: 10px;
margin: 5px;
margin-top: 20%;
`;