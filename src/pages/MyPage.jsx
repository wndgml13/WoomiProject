import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styled from "styled-components";
import { useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMypage } from "../redux/modules/mypageSlice";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { getCookieToken } from "../storage/Cookie";

export default function MyPage() {
  const { isFinish, isLoading, error, mypage } = useSelector(
    (state) => state.mypage
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordChknew, setPasswordChkNew] = useState("");
  const [editToggleMode, setEditToggleMode] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState({
    nickname: "",
    password: "",
    pastPassword: "",
  });

  const config = {
    headers: { Authorization: getCookieToken() },
  };

  const onClickDelete = async () => {
    await axios.delete("https://jdh3340.shop/api/user", config);
  };

  useEffect(() => {
    dispatch(__getMypage());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중..</div>;
  }

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
        await axios.put("https://jdh3340.shop/api/user", editUserInfo, config);
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
          onClick={() => {
            navigate("/");
            onClickDelete();
          }}
        >
          회원탈퇴
        </Button>

        <Button type="button" variant="outlined" onClick={toggleBtn}>
          수정하자
        </Button>
      </>
    );
  }
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
  width: 150px;
  font-family: "Patua One", cursive;
  color: #fff;
  font-size: 20px;
  background-color: #58bfc1;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
`;
