import styled from "styled-components";

export default function Main() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: "#BFDAD8",
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
                <h2 style={{ textAlign: "center", fontSize: 25 }}>
                  ISXX의 게시판
                </h2>
                <div className="box">
                  <img
                    src={process.env.PUBLIC_URL + "/CARD_ISXX.png"}
                    alt="isxx"
                    width="100%"
                  />
                  <div>ISXX(내향감각)</div>
                  <div>ISFJ, ISFP, ISTJ, ISTP</div>
                </div>
              </div>
            </StCards>

            <div className="INXX">
              <h4>INXX의 게시판</h4>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/CARD_INXX.png"}
                  alt="inxx"
                  width="40%"
                />
                <div>ISXX(내향직관)</div>
                <div>INFJ, INFP, INTJ, INTP</div>
              </div>
            </div>

            <div className="ESXX">
              <h4>ESXX의 게시판</h4>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/CARD_ESXX.png"}
                  alt="esxx"
                  width="40%"
                />
                <div>ESXX(외향감각)</div>
                <div>ESFJ, ESFP, ESTJ, ESTP</div>
              </div>
            </div>

            <div className="ENXX">
              <h4>ENXX의 게시판</h4>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/CARD_ENXX.png"}
                  alt="enxx"
                  width="40%"
                />
                <div>ENXX(외향직관)</div>
                <div>ENFJ, ENFP, ENTJ, ENTP</div>
              </div>
            </div>
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
  border-radius: 10px;
  margin-top: 2%;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;

  padding: 20px;

  border: 1px solid black;
`;
