import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import styled from "styled-components";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Login() {
  const [targetFlag, setTargetFlag] = useState(false);
  const [title, setTitle] = useState("회원가입");

  const toggleFlag = (event) => {
    if (event.target.id === "signup") {
      setTargetFlag(false);
      setTitle("회원가입");
    } else {
      setTargetFlag(true);
      setTitle("로그인");
    }
  };

  return (
    <LoginBox>
      <HDiv>
        <h1>{title}</h1>
      </HDiv>

      <BtnGroupContainer>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <LoginBtn id="signup" onClick={toggleFlag}>
            회원가입
          </LoginBtn>
          <SignUpBtn id="login" onClick={toggleFlag}>
            로그인
          </SignUpBtn>
        </ButtonGroup>
      </BtnGroupContainer>

      {targetFlag ? <SignIn /> : <SignUp />}
    </LoginBox>
  );
}
const LoginBox = styled.div`
  width: 1360px;
  margin: auto;
`;
const BtnGroupContainer = styled.div`
  width: 660px;
  text-align: center;
  margin: 20px auto;
`;

const LoginBtn = styled(Button)`
  width: 250px;
  height: 45px;
`;
const SignUpBtn = styled(Button)`
  width: 250px;
  height: 45px;
`;

const HDiv = styled.div`
  width: 500px;
  text-align: center;
  margin: auto;
`;
