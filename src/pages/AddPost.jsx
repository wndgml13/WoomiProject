import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCookieToken } from "../storage/Cookie";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function AddPost() {
  const config = {
    headers: { Authorization: getCookieToken() },
  };
  const navigate = useNavigate();

  const { boardname } = useParams();
  // const [addPostsInfo, setAddPostsInfo] = useState({
  //   title: "",
  //   content: "",
  //   url: "",
  //   status: false,
  // });

  const [addPostsInfo, setAddPostsInfo] = useState({
    title: "",
    content: "",
  });

  const { title, content, url } = addPostsInfo;

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setAddPostsInfo({
      ...addPostsInfo,
      [name]: value,
    });
  };

  const onCheckHandler = (event) => {
    const { checked, name } = event.target;
    setAddPostsInfo({
      ...addPostsInfo,
      [name]: checked,
    });
  };

  const onSubmitHandler = async () => {
    await axios.post(
      `http://jdh3340.shop/api/board/${boardname}`,
      addPostsInfo,
      config
    );
    // setAddPostsInfo({
    //   title: "",
    //   content: "",
    // });
    navigate(`/postscontainer/${boardname}`);
  };

  return (
    <AddPostBox>
      <HDiv>
        <h1>게시글 작성</h1>
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
            value={title}
            onChange={onChangeHandler}
            placeholder="제목을 입력하세요"
            label="제목"
            multiline
          />
          <TextField
            name="content"
            value={content}
            onChange={onChangeHandler}
            placeholder="내용을 입력하세요"
            label="내용"
            multiline
            rows={4}
          />
        </Box>
      </InputBox>

      <AddPostFile>
        <input type="file" name="url" onChange={onChangeHandler} />
        <FormControlLabel
          name="status"
          onChange={onCheckHandler}
          control={<Checkbox defaultChecked />}
          label="공지글 설정"
        />
      </AddPostFile>

      <ButtonContainer>
        <ButtonGroup>
          <MyButton>취소</MyButton>
          <MyButton onClick={onSubmitHandler}>등록</MyButton>
        </ButtonGroup>
      </ButtonContainer>
    </AddPostBox>
  );
}

const AddPostBox = styled.div`
  width: 1360px;
  margin: 20px auto;
`;

const InputBox = styled.div`
  text-align: center;
  width: 500px;
  margin: 50px auto;
`;

const AddPostFile = styled.div`
  text-align: center;
  width: 500px;
  margin: auto;
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
