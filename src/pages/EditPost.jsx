import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import mockData from "../mockData";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { getCookieToken } from "../storage/Cookie";
import axios from "axios";

export default function EditPost() {
  const { boardname, id } = useParams();

  // let res = {};
  const config = {
    headers: { Authorization: getCookieToken() },
  };

  // const func = async () => {
  //   const res = await axios.get(
  //     `http://jdh3340.shop/api/board/${boardname}/id/${id}`,
  //     config
  //   );
  //   console.log("res !!!!!", res);
  // };

  // // 게시글 조회
  // useEffect(() => {
  //   func();
  // }, []);

  const [editInfo, setEditInfo] = useState({
    // title: mockData.editPosts.title,
    // content: mockData.editPosts.content,
  });

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setEditInfo({
      ...editInfo,
      [name]: value,
    });
  };

  const onCheckHandler = (event) => {
    const { checked, name } = event.target;
    setEditInfo({
      ...editInfo,
      [name]: checked,
    });
  };

  const onSubmitHandler = async () => {
    console.log(editInfo);
    const res = await axios.put(
      `http://jdh3340.shop/api/board/${boardname}/id/${id}`,
      editInfo,
      config
    );

    console.log(res);
  };

  return (
    <EditPostBox>
      <HDiv>
        <h1>게시글 수정</h1>
      </HDiv>
      <InputBox>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch", height: "9ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="title"
            value={editInfo.title}
            onChange={onChangeHandler}
            placeholder="제목을 입력하세요"
            label="제목"
            multiline
          />
          <TextField
            name="content"
            value={editInfo.content}
            onChange={onChangeHandler}
            placeholder="내용을 입력하세요"
            label="내용"
            multiline
            rows={4}
          />
        </Box>
      </InputBox>

      {/* <EditPostFile>사진</EditPostFile> */}
      <HDiv>
        <FormControlLabel
          name="status"
          onChange={onCheckHandler}
          defaultChecked={editInfo.status}
          control={<Checkbox defaultChecked />}
          label="공지글 설정"
        />
      </HDiv>

      <ButtonContainer>
        <ButtonGroup>
          <MyButton>취소</MyButton>
          <MyButton onClick={onSubmitHandler}>수정</MyButton>
        </ButtonGroup>
      </ButtonContainer>
    </EditPostBox>
  );
}

const EditPostBox = styled.div`
  width: 1360px;
  height: 670px;
  margin: 20px auto;
`;

const EditPostTitle = styled.div``;
const EditPostContent = styled.div``;
const EditPostFile = styled.div``;

const BtnGroup = styled.div``;

const InputBox = styled.div`
  text-align: center;
  width: 500px;
  margin: 50px auto;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const MyButton = styled(Button)`
  width: 230px;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
`;

const HDiv = styled.div`
  width: 500px;
  text-align: center;
  margin: auto;
`;
