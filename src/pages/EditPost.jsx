import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
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
  const navigate = useNavigate();
  const config = {
    headers: { Authorization: getCookieToken() },
  };

  const [editInfo, setEditInfo] = useState({
    title: "",
    content: "",
  });

  const fetchPosts = async () => {
    const data = await axios.get(
      `http://jdh3340.shop/api/board/${boardname}/id/${id}`
    );

    setEditInfo({
      title: data.data.data.title,
      content: data.data.data.content,
    });
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    await axios.put(
      `http://jdh3340.shop/api/board/${boardname}/id/${id}`,
      editInfo,
      config
    );

    navigate(`/${boardname}/detail/${id}`);
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
