import styled from "styled-components";
import {useState} from "react";
import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { __getMypage } from "../redux/modules/mypageSlice"
import { useNavigate} from "react-router-dom";


import axios from "axios";
import {Table} from "react-bootstrap";



export default function MyPage() {
  const { isFinish , isLoading, error, mypage } = useSelector((state) => state.mypage );
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 회원탈퇴 버튼 클릭 시 Main 페이지로 이동
  const [editnickname, setEditNickName] = useState(mypage?.nickname); // mypage.nickname을 초기값으로 준다
  const [nicknamemode, setNickNameMode] = useState(false);
  const [editpassword, setEditPassWord] = useState("");
  const [passwordmode, setPassWordMode] = useState(false);

  
  const onClickEditNickName = async () => {
    if (nicknamemode) {
      setNickNameMode(false);
      await axios.patch('http://localhost:3001/profiles', {nickname:editnickname});
    } else{
      setNickNameMode(true);
    }
  } 
  const onClickEditPassWord = async () => {
    if (passwordmode) {
      setPassWordMode(false);
      await axios.patch('http://localhost:3001/profiles', {newpassword:editpassword});
    } else{
      setPassWordMode(true);
    }
  } 
  const onClickDelete = async () => {
    await axios.delete('http://localhost:3001/profiles');
    
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
      <div>
      {nicknamemode ?
      <input
        type="text"
        placeholder="새로운 닉네임을 입력하세요."
        onChange={(e) => {
          
          setEditNickName(e.target.value);
        }}
        />
        : <div>닉네임 : {editnickname}</div>
      }
      </div>
      
      {passwordmode ?
      <div>
        <input
          type="text"
          placeholder="새로운 비밀번호를 입력하세요."
          onChange={(e) => {
            setEditPassWord(e.target.value);
          }}
          />
          <input
          type="text"
          placeholder="비밀번호 재확인"
          onChange={(e) => {
            setEditPassWord(e.target.value);
          }}
          />
      </div>
        : ""
      }
    </Page_Container>
      <Edit_Delete_btn
        type="button"
        onClick={ () => 
          {navigate("/"); 
        onClickDelete();}}>회원탈퇴
      </Edit_Delete_btn>
      {/* <div>{mypage?.map((todo)=>(
        <div key={todo.id}></div>
      ))}</div> */}
      <Edit_Delete_btn
        type="button"
        onClick={() => onClickEditNickName(editnickname)}
        
        >닉네임 변경
      </Edit_Delete_btn>
      <Edit_Delete_btn
        type="button"
        onClick={() => onClickEditPassWord(editpassword)}
      >비밀번호 변경
      </Edit_Delete_btn>
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