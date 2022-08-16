import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import styled from "styled-components";
import { useState } from "react";

export default function Login() {
  const [targetFlag, setTargetFlag] = useState(false);

  const toggleFlag = (event) => {
    if (event.target.id === "signup") {
      setTargetFlag(false);
    } else {
      setTargetFlag(true);
    }
  };

  return (
    <LoginBox>
      <BtnGroup>
        <SignUpBtn id="signup" onClick={toggleFlag}>
          회원가입
        </SignUpBtn>
        <LoginBtn id="login" onClick={toggleFlag}>
          로그인
        </LoginBtn>
      </BtnGroup>
      {targetFlag ? <SignIn /> : <SignUp />}
    </LoginBox>
  );
}
const LoginBox = styled.div`
  width: 1360px;
  height: 670px;
  margin: 20px auto;
`;
const BtnGroup = styled.div`
  width: 660px;
  margin: auto;
`;

const LoginBtn = styled.button`
  width: 330px;
  height: 40px;
`;
const SignUpBtn = styled.button`
  width: 330px;
  height: 40px;
`;

// try {
//   // axios으로 로그인 요청 (post)
//   let res = await axios({
//      method: 'POST',
//      url: 'https://reqres.in/api/login',
//      data: {
//         email: email.value,
//         password: password.value,
//      },
//   });
//   console.log(res);
//   document.write(JSON.stringify(res));
// } catch (err) {
//   console.log(err);
//   throw new Error(err);
// }
