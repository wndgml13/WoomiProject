import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: "#B4CBC9",
          flex: 1,
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
        }}
      >
        <div className="MainIMG" style={{ padding: "3%" }}>
          <img
            alt="main"
            src={process.env.PUBLIC_URL + "/Main.png"}
            width="100%"
            style={{ display: "block" }}
          />
        </div>

        <div className="BoxIMGContainer">
          <div className="MainContents">
            <StCards>
              <div className="ISXX">
                <h2 style={{ textAlign: "center", fontSize: 30 }}>
                  ISXX의 게시판
                </h2>
                <div className="box">
                  <img
                    onClick={() => navigate("/postscontainer/is")}
                    src={process.env.PUBLIC_URL + "/CARD_ISXX.png"}
                    width="100%"
                    alt="is"
                    style={{ border: "1px solid #8F8F8F" }}
                  />
                  <StMsgBox>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 23,
                        fontWeight: "bold",
                      }}
                    >
                      ISXX(내향감각)
                    </div>
                    <div style={{ textAlign: "center", fontSize: 20 }}>
                      ISFJ, ISFP, ISTJ, ISTP
                    </div>
                  </StMsgBox>
                </div>
              </div>
            </StCards>

            <StCards>
              <div className="INXX">
                <h2 style={{ textAlign: "center", fontSize: 30 }}>
                  INXX의 게시판
                </h2>
                <div className="box">
                  <img
                    onClick={() => navigate("/postscontainer/in")}
                    src={process.env.PUBLIC_URL + "/CARD_INXX.png"}
                    width="100%"
                    alt="in"
                    style={{ border: "1px solid #8F8F8F" }}
                  />
                  <StMsgBox>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 23,
                        fontWeight: "bold",
                      }}
                    >
                      INXX(내향직관)
                    </div>
                    <div style={{ textAlign: "center", fontSize: 20 }}>
                      INFJ, INFP, INTJ, INTP
                    </div>
                  </StMsgBox>
                </div>
              </div>
            </StCards>

            <StCards>
              <div className="ESXX">
                <h2 style={{ textAlign: "center", fontSize: 30 }}>
                  ESXX의 게시판
                </h2>
                <div className="box">
                  <img
                    onClick={() => navigate("/postscontainer/es")}
                    src={process.env.PUBLIC_URL + "/CARD_ESXX.png"}
                    width="100%"
                    alt="es"
                    style={{ border: "1px solid #8F8F8F" }}
                  />
                  <StMsgBox>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 23,
                        fontWeight: "bold",
                      }}
                    >
                      ESXX(외향감각)
                    </div>
                    <div style={{ textAlign: "center", fontSize: 20 }}>
                      ESFJ, ESFP, ESTJ, ESTP
                    </div>
                  </StMsgBox>
                </div>
              </div>
            </StCards>

            <StCards>
              <div className="ENXX">
                <h2 style={{ textAlign: "center", fontSize: 30 }}>
                  ENXX의 게시판
                </h2>
                <div className="box">
                  <img
                    onClick={() => navigate("/postscontainer/en")}
                    src={process.env.PUBLIC_URL + "/CARD_ENXX.png"}
                    width="100%"
                    alt="en"
                    style={{ border: "1px solid #8F8F8F" }}
                  />
                  <StMsgBox>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: 23,
                        fontWeight: "bold",
                      }}
                    >
                      ENXX(외향직관)
                    </div>
                    <div style={{ textAlign: "center", fontSize: 20 }}>
                      ENFJ, ENFP, ENTJ, ENTP
                    </div>
                  </StMsgBox>
                </div>
              </div>
            </StCards>

            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              width="10%"
              alt="logo"
              style={{ opacity: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const StCards = styled.div`
  background-color: white;
  width: 40%;
  height: 30%;
  border-radius: 5px;
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 0%;
  margin-bottom: 2%;
  padding: 1%;
  float: left;
`;

const StMsgBox = styled.div`
  background-color: #d9d9d9;
  width: 90%;
  align-items: center;
  height: 15%;
  margin-top: 2%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
  padding: 5%;
  text-align: center;
  border: 1px solid black;
`;
