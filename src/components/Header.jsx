import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { getCookieToken, removeCookieToken } from "../storage/Cookie";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __searchTitle } from "../redux/modules/searchSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const token = getCookieToken();

  const moveToBoard = (event) => {
    switch (event.target.id) {
      case "ISXX":
        navigate("postscontainer/is");
        break;

      case "INXX":
        navigate("postscontainer/in");
        break;

      case "ESXX":
        navigate("postscontainer/es");
        break;

      case "ENXX":
        navigate("postscontainer/en");
        break;

      case "ALL":
        navigate("postscontainer/all");
        break;

      default:
        navigate("/");
        break;
    }
  };

  const login_logout = () => {
    if (token) {
      alert("로그아웃 하시겠습니까?");
      removeCookieToken();
      localStorage.removeItem("nickname");
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      dispatch(__searchTitle(text));
      navigate("/postscontainer/all/");
    }
  };

  const moveToMyPage = () => {
    if (getCookieToken()) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div>
        <img
          onClick={moveToBoard}
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
          width="250px"
        />
        <Button variant="outlined" onClick={moveToMyPage}>
          마이페이지
        </Button>
        <Button variant="outlined" onClick={login_logout}>
          {token ? "로그아웃" : "로그인"}
        </Button>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                id="ISXX"
                variant="h6"
                noWrap
                component="div"
                onClick={moveToBoard}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                ISXX
              </Typography>
              <Typography
                id="INXX"
                variant="h6"
                noWrap
                component="div"
                onClick={moveToBoard}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                INXX
              </Typography>
              <Typography
                id="ESXX"
                variant="h6"
                noWrap
                component="div"
                onClick={moveToBoard}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                ESXX
              </Typography>
              <Typography
                id="ENXX"
                variant="h6"
                noWrap
                component="div"
                onClick={moveToBoard}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                ENXX
              </Typography>
              <Typography
                id="ALL"
                variant="h6"
                noWrap
                component="div"
                onClick={moveToBoard}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                ALL
              </Typography>
              <TextField
                id="search_field"
                label="Search Field"
                variant="standard"
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
              />
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}
