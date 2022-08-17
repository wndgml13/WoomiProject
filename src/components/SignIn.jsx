import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { setAccessToken } from "../storage/Cookie";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignIn() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginInfo;

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const login = async () => {
    console.log("login!!", loginInfo);
    try {
      let res = await axios({
        method: "POST",
        url: "http://jdh3340.shop/login",
        data: {
          username,
          password,
        },
        withCredentials: true,
      });
      console.log(res);
      setAccessToken(res.headers.authorization);
      axios.defaults.headers.common[
        "Authorization"
      ] = `${res.headers.authorization}`;
      return navigate("/");
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <SignInBox>
      <BoxGroup
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="userId"
          label="UserID"
          variant="outlined"
          value={username}
          name="username"
          onChange={onChangeHandler}
        />
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
          id="password"
          label="Password"
          variant="outlined"
          value={password}
          name="password"
          type="password"
          onChange={onChangeHandler}
        />
      </BoxGroup>
      <BoxGroup>
        <SignUpBtn variant="outlined" onClick={login}>
          로그인
        </SignUpBtn>
      </BoxGroup>
    </SignInBox>
  );
}

const SignInBox = styled.div`
  width: 660px;
  height: 530px;
  margin: auto;
`;

const BoxGroup = styled(Box)`
  text-align: center;
`;

const SignUpBtn = styled(Button)`
  width: 500px;
  height: 45px;
`;
