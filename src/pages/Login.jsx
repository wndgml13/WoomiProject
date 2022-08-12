import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function Login() {
  console.log("로그인 페이지");
  return (
    <>
      <button>로그인</button>
      <button>회원가입</button>
      <SignIn />
      <SignUp />
    </>
  );
}
