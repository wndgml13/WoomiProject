import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { setAccessToken } from "../storage/Cookie";

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
    // email : eve.holt@reqres.in
    // password : cityslicka
    console.log("login!!", loginInfo);
    try {
      // axios으로 로그인 요청 (post)
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
      console.log(err);
      throw new Error(err);
    }
  };

  return (
    <SignInBox>
      <div>로그인!!</div>
      <input value={username} name="username" onChange={onChangeHandler} />
      <input
        value={password}
        name="password"
        type="password"
        onChange={onChangeHandler}
      />
      <button onClick={login}>로그인수행 버튼</button>
    </SignInBox>
  );
}

const SignInBox = styled.div`
  width: 660px;
  height: 530px;
  border: 1px solid black;
  margin: auto;
`;
