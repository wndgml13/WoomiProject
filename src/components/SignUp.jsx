import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickName] = useState("");

  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [checkPasswordError, setCheckPasswordError] = useState(false);
  const [nickNameError, setNickNameError] = useState(false);

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
    setNickName(event.target.value);
    // if (!event.target.value) {
    //   console.log("skdkdk");
    //   setNickNameError(false);
    // } else {
    //   console.log("asdasdas");
    //   setNickNameError(true);
    // }
    // setNickName(event.target.value);
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
      return true;
    } else {
      return false;
    }
  };

  const onSubmitHandler = async () => {
    if (validation()) {
      console.log(userId, password, nickname);

      try {
        const res = await axios.post("http://jdh3340.shop/api/user/register", {
          username: userId,
          password,
          nickname,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }

      return;
    }
    // 실패 -> alert 창으로 실패 알림
  };

  return (
    <SignUpBox>
      <div>회원 가입!!</div>
      <SignUpID>
        <IDInput
          maxLength={10}
          placeholder="UserID"
          value={userId}
          onChange={onChangeUserId}
        />
        {userIdError && (
          <div className="invalid-input">
            사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.
          </div>
        )}
      </SignUpID>

      <SignUpPW>
        <PWInput
          maxLength={10}
          placeholder="Password"
          value={password}
          type="password"
          onChange={onChangePassword}
        />
        {passwordError && (
          <div className="invalid-input">
            비밀번호는 8자 이상이어야 하며 1자 이상을 포함해야 합니다. 문자와
            숫자 하나.{" "}
          </div>
        )}
      </SignUpPW>

      <SignUpChkPW>
        <ChkPWInput
          maxLength={10}
          placeholder="CheckPassword"
          value={checkPassword}
          type="password"
          onChange={onChangeCheckPassword}
        />
        {checkPasswordError && (
          <div className="invalid-input">비밀번호가 일치하지 않습니다.</div>
        )}
      </SignUpChkPW>

      <SignUpNickName>
        <NickNameInput
          maxLength={10}
          placeholder="NickName"
          value={nickname}
          onChange={onChangeNickName}
        />
      </SignUpNickName>

      <SignBtn onClick={onSubmitHandler}>회원가입 완료 버튼</SignBtn>
    </SignUpBox>
  );
}

const SignUpBox = styled.div`
  width: 660px;
  height: 530px;
  border: 1px solid black;
  margin: auto;
`;

const SignUpID = styled.div`
  text-align: center;
`;

const IDInput = styled.input`
  width: 500px;
`;

const SignUpPW = styled.div`
  text-align: center;
`;

const PWInput = styled.input`
  width: 500px;
`;
const SignUpChkPW = styled.div`
  text-align: center;
`;

const ChkPWInput = styled.input`
  width: 500px;
`;
const SignUpNickName = styled.div`
  text-align: center;
`;

const NickNameInput = styled.input`
  width: 500px;
`;
const SignBtn = styled.button`
  display: block;
  width: 500px;
  margin: auto;
`;

// Access to XMLHttpRequest at 'http://jdh3340.shop/api/user/register' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
// Uncaught (in promise) Error: AxiosError: Network Error at onSubmitHandler
