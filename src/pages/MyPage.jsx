import Swal from "sweetalert2";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styled from "styled-components";
import {useState} from "react";
import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { __getMypage } from "../redux/modules/mypageSlice"
import { useNavigate} from "react-router-dom";


import axios from "axios";

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

    const data = await axios.delete("http://jdh3340.shop/api/user", config);
    console.log(data);
  };

  useEffect(() => {
    dispatch(__getMypage());
  }, [dispatch]);


  
  
  

  
  if (isLoading) {
    return <div>로딩 중..</div>;
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  const { nickname, password, pastPassword } = editUserInfo;

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setEditUserInfo({
      ...editUserInfo,
      [name]: value,
    });
  };

  const onChangeChkHandler = (event) => {
    setPasswordChkNew(event.target.value);
  };

  const toggleBtn = async (event) => {
    if (editToggleMode) {
      if (editUserInfo.password === passwordChknew) {
        setEditToggleMode(false);
        const data = await axios.put(
          "http://jdh3340.shop/api/user",
          editUserInfo,
          config
        );
        console.log(data);
      }
    } else {
      setEditToggleMode(true);
    }
  };
  if (isFinish) {
    return (
      <>
        <PageContainer>
          <Profile>회원정보 조회</Profile>
          <div>ID : {mypage.data.username}</div>

          <div>
            {editToggleMode ? (
              <TextField
                type="text"
                name="nickname"
                value={nickname}
                label="새로운 닉네임"
                variant="outlined"
                placeholder="새로운 닉네임"
                onChange={onChangeHandler}
              />
            ) : (
              <div>닉네임 : {mypage.data.nickname}</div>
            )}
          </div>

          {editToggleMode ? (
            <div>
              <TextField
                type="text"
                name="pastPassword"
                value={pastPassword}
                label="기존 비밀번호"
                variant="outlined"
                placeholder="기존 비밀번호"
                onChange={onChangeHandler}
              />
              <TextField
                type="text"
                name="password"
                value={password}
                label="새로운 비밀번호"
                variant="outlined"
                placeholder="새로운 비밀번호"
                onChange={onChangeHandler}
              />
              <TextField
                type="text"
                name="passwordChk"
                value={passwordChknew}
                label="비밀번호 재확인"
                variant="outlined"
                placeholder="비밀번호 재확인"
                onChange={onChangeChkHandler}
              />
            </div>
          ) : (
            ""
          )}
        </PageContainer>
        <Button
          type="button"
          variant="outlined"
          onClick={ () =>
            {navigate("/");
          onClickDelete();}}>회원탈퇴
        </Button>
        
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

      </Button_Container>
      </Box>
      </Container>
    </CssBaseline>
}

const PageContainer = styled.div`
  // background-color: blue;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding: 70px;
`;


const Profile = styled.div`
background-color: blue;
width: 160px;
// font-family: 'Patua One', cursive;
color:#fff;
font-size: 20px;
background-color: #4CA8A2;
text-align: center;
border-radius: 10px;
padding: 10px;
font-weight:bold;
margin: 20px;
margin-block: 20px;
`;


const Button_Container = styled.div`
  bottom: 100px;
  position: absolute;
  margin: 100px;
  margin-bottom: auto;
`;

const StFont = styled.input`
  top : 10px;
`;



