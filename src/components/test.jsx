// // import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// import styled from "styled-components";
// import {useState} from "react";
// import React, {useEffect} from "react";
// import { useDispatch,useSelector } from "react-redux";
// import { __getMypage } from "../redux/modules/mypageSlice"
// import { useNavigate} from "react-router-dom";


// import axios from "axios";
// import {Table} from "react-bootstrap";
// import { getCookieToken } from "../storage/Cookie";



// export default function MyPage() {
//   const { isFinish , isLoading, error, mypage } = useSelector((state) => state.mypage );
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // 회원탈퇴 버튼 클릭 시 Main 페이지로 이동
//   const [editnickname, setEditNickName] = useState(mypage?.nickname); // mypage.nickname을 초기값으로 준다
//   const [nicknamemode, setNickNameMode] = useState(false);
//   const [editpassword, setEditPassWord] = useState("");
//   const [passwordmode, setPassWordMode] = useState(false);
//   const [pastpassword, setpastpassword] = useState("");
//   const [pastpasswordcheck, setPastPassWordCheck] = useState("");   // 비밀번호 재확인
  
  
//   const userinfo = {
//         nickname: editnickname,
//         password: editpassword,
//         pastPassword: pastpassword
//   }

// const config = {
//     headers: { Authorization: getCookieToken() },
//     };
  
//   const onClickEditNickName = async () => {
//     if (nicknamemode) {
//       if (pastpassword === pastpasswordcheck) {
//         setNickNameMode(false);
//       const data = await axios.put('http://jdh3340.shop/api/user', userinfo, config); //http://jdh3340.shop/api/board/es/all
//     console.log(data);
//       }
      
//     } else{
//       console.log(mypage.password);
//       setpastpassword(mypage.password);
//       setNickNameMode(true);
//     }
//   } 
//   const onClickEditPassWord = async () => {               
//     if (passwordmode) {
//       setPassWordMode(false);
//       const data = await axios.patch('http://jdh3340.shop/api/user', {password:editpassword}, config);
//       console.log(data);
//     } else{
//       setPassWordMode(true);
//     }
//   } 
//   const onClickDelete = async () => {
//     const data = await axios.delete('http://jdh3340.shop/api/user', config);
//     console.log(data);
//   }
  
//   // {newpassword:editpassword}
//   useEffect(() => {
//     dispatch(__getMypage());
//   }, [dispatch]);
  
//   if (isLoading) {
//     return <div>로딩 중..</div>;
//   };

//   if (error) {
//     return <div>{error.message}</div>;
//   };
//   if (isFinish) {
//     return <>
//     <Page_Container>
//       <Profile>회원정보 조회</Profile>
//       <div>ID : {mypage.username}</div>

//       <div>
//       {nicknamemode ?
//       <TextField
//         type="text"
//         id="outlined-basic" 
//         label="새로운 닉네임" 
//         variant="outlined"
//         placeholder="새로운 닉네임"
//         onChange={(e) => {
          
//           setEditNickName(e.target.value);
//         }}
//         />
//         : <div>닉네임 : {editnickname}</div>
//       }
//       </div>
      
//       {passwordmode ?
//       <div>
//         <TextField
//           type="text"
//           id="outlined-basic" 
//           label="기존 비밀번호" 
//           variant="outlined"
//           placeholder="기존 비밀번호"
//           onChange={(e) => {
//             setEditPassWord(e.target.value);
//           }}
//           />
//         <TextField
//           type="text"
//           id="outlined-basic" 
//           label="새로운 비밀번호" 
//           variant="outlined"
//           placeholder="새로운 비밀번호"
//           onChange={(e) => {
//             setpastpassword(e.target.value);
//           }}
//           />
//           <TextField
//           type="text"
//           id="outlined-basic" 
//           label="비밀번호 재확인" 
//           variant="outlined"
//           placeholder="비밀번호 재확인"
//           onChange={(e) => {
//             setPastPassWordCheck(e.target.value);
//           }}
//           />
//       </div>
//         : ""
        
//       }
//     </Page_Container>
//       <Button
//         type="button"
//         variant="outlined"
//         onClick={ () => 
//           {navigate("/"); 
//         onClickDelete();}}>회원탈퇴
//       </Button>
//       {/* <div>{mypage?.map((todo)=>(
//         <div key={todo.id}></div>
//       ))}</div> */}
//       <Button
//         type="button"
//         variant="outlined"
//         onClick={() => onClickEditNickName(editnickname)}
//         >닉네임 변경
//       </Button>
//       <Button
//           type="button"
//           variant="outlined"
//           onClick={() => onClickEditPassWord(editpassword)}
//         >비밀번호 변경
//       </Button>
      
      
      
        
      
//     </>
    
//   };
// };


// const Page_Container = styled.div`
//   // background-color: blue;
//   max-width: 1200px;
//   min-width: 800px;
//   margin: 0 auto;
//   padding: 70px;
// `;

// const Profile = styled.div`
// background-color: blue;
// width: 150px;
// font-family: 'Patua One', cursive;
// color:#fff;
// font-size: 20px;
// background-color: #58bfc1;
// text-align: center;
// border-radius: 10px;
// padding: 10px;
// font-weight:bold;
// `;

// const Edit_Delete_btn = styled.button`
// float: right;
// // flex-grow: 1;
// // margin-left: auto;
// // display: flex;
// // justify-content: space-between;
// // position: absolute;
// cursor: pointer;
// // content: "";
// // right: 0;
// // float-right: 10px;
// margin: 5px;
// margin-top: 20%;
// `;




// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// // import { getCookieToken } from "../storage/Cookie";
// import { getCookieToken } from "../../storage/Cookie";

// const config = {
//   headers: { Authorization: getCookieToken() },
//   };

// const initialState = {
//     mypage: null,
//     isFinish: false,
//     isLoading: false,
//     error: null,
//   };
  
// export const __getMypage = createAsyncThunk(
//     "mypage/getMypage",
    
//     async (payload, thunkAPI) => {
//         try {
//             const data = await axios.get('http://jdh3340.shop/api/user', config);
//             console.log(data);
//             return thunkAPI.fulfillWithValue(data.data);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );

//   const mypageSlice = createSlice({
//     name: "mypage",
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [__getMypage.pending]: (state) => {
//             state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
//             state.isFinish = false;
//         },
//           [__getMypage.fulfilled]: (state, action) => {
//             state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
//             state.mypage = action.payload; // Store에 있는 Mypage에 서버에서 가져온 Mypage를 넣습니다.
//             state.isFinish = true;
//         },
//           [__getMypage.rejected]: (state, action) => {
//             state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
//             state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
//             state.isFinish = true;
//         },  
//     },
// });

// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const {} = mypageSlice.actions;

// // reducer 는 configStore에 등록하기 위해 export default 합니다.
// export default mypageSlice.reducer;