import styled from "styled-components";
import {useState} from "react";
import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { __getMypage } from "../redux/modules/mypageSlice"


import axios from "axios";
import {Table} from "react-bootstrap";



export default function MyPage() {
  const { isFinish , isLoading, error, mypage } = useSelector((state) => state.mypage );
  const dispatch = useDispatch();
  const [editnickname, setEditNickName] = useState({
    name: "",
  });

  const onClickEditNickName = () => {
    axios.patch('http://localhost:3001/profiles', {nickname:editnickname});
  } 

  
  
  
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
      <div>닉네임 : {mypage.nickname}</div>
      <input
        type="text"
        placeholder="수정값 입력"
        onChange={(ev) => {
          setEditNickName({
            ...editnickname,
            name: ev.target.value,
          });
        }}
        />
    </Page_Container>
    <Edit_Delete_btn>회원탈퇴</Edit_Delete_btn>
    <Edit_Delete_btn
      type="button"
      onClick={() => onClickEditNickName(editnickname)}
      >정보변경</Edit_Delete_btn>
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