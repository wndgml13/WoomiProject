import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignUp() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickName] = useState("");

  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [checkPasswordError, setCheckPasswordError] = useState(false);
  const [nickNameError, setNickNameError] = useState(false);
  console.log(nickNameError);

  const onChangeUserId = (event) => {
    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!event.target.value || userIdRegex.test(event.target.value)) {
      setUserIdError(false);
    } else {
      setUserIdError(true);
    }
    setUserId(event.target.value);
  };

  const onChangePassword = (event) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!event.target.value || passwordRegex.test(event.target.value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    if (!checkPassword || event.target.value === checkPassword) {
      setCheckPasswordError(false);
    } else {
      setCheckPasswordError(true);
    }
    setPassword(event.target.value);
  };

  const onChangeCheckPassword = (event) => {
    if (password === event.target.value) {
      setCheckPasswordError(false);
    } else {
      setCheckPasswordError(true);
    }
    setCheckPassword(event.target.value);
  };

  const onChangeNickName = (event) => {
    if (!event.target.value) {
      setNickNameError(false);
    } else {
      setNickNameError(true);
    }
    setNickName(event.target.value);
  };

  const validation = () => {
    if (!userId) setUserIdError(true);
    if (!password) setPasswordError(true);
    if (!checkPassword) setCheckPasswordError(true);

    if (
      userId &&
      password &&
      checkPassword &&
      !userIdError &&
      !passwordError &&
      !checkPasswordError
    ) {
      console.log("ddd");
      return true;
    } else {
      console.log("aaaa");
      return false;
    }
  };

  const onSubmitHandler = async () => {
    console.log("dkdkdkdkdkdk");
    if (validation()) {
      try {
        console.log("dadadfsa");
        const data = await axios.post("http://jdh3340.shop/api/user/register", {
          username: userId,
          password,
          nickname,
        });
      } catch (error) {
        throw new Error(error);
      }
      alert("회원 가입 완료하였습니다!!");
      setUserId("");
      setPassword("");
      setCheckPassword("");
      setNickName("");
      return;
    } else {
      alert("입력 정보를 다시 확인하세요!!");
    }
  };

  return (
    <SignUpBox>
      <BoxGroup
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {userIdError ? (
          <TextField
            error
            id="userId_error"
            label="UserID*"
            value={userId}
            onChange={onChangeUserId}
            helperText="사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다."
          />
        ) : (
          <TextField
            id="userId"
            label="UserID*"
            variant="outlined"
            value={userId}
            onChange={onChangeUserId}
          />
        )}
      </BoxGroup>

      <BoxGroup
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {passwordError ? (
          <TextField
            error
            id="password_error"
            label="Password*"
            onChange={onChangePassword}
            value={password}
            type="password"
            helperText="비밀번호는 8자 이상이어야 하며 1자 이상을 포함해야 합니다. 문자와 숫자 하나."
          />
        ) : (
          <TextField
            id="password"
            label="Password*"
            variant="outlined"
            onChange={onChangePassword}
            value={password}
            type="password"
          />
        )}
      </BoxGroup>
      <BoxGroup
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {checkPasswordError ? (
          <TextField
            error
            id="checkpassword_error"
            label="CheckPassword*"
            onChange={onChangeCheckPassword}
            value={checkPassword}
            type="password"
            helperText="비밀번호가 일치하지 않습니다."
          />
        ) : (
          <TextField
            id="checkpassowrd"
            label="CheckPassword*"
            variant="outlined"
            value={checkPassword}
            type="password"
            onChange={onChangeCheckPassword}
          />
        )}
      </BoxGroup>
      <BoxGroup
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="nickname"
          label="NickName"
          variant="outlined"
          value={nickname}
          onChange={onChangeNickName}
        />
      </BoxGroup>
      <BoxGroup>
        <SignUpBtn variant="outlined" onClick={onSubmitHandler}>
          회원 가입
        </SignUpBtn>
      </BoxGroup>
    </SignUpBox>
  );
}
const BoxGroup = styled(Box)`
  text-align: center;
`;

const SignUpBtn = styled(Button)`
  width: 500px;
  height: 45px;
`;

const SignUpBox = styled.div`
  width: 660px;
  margin: auto;
`;
