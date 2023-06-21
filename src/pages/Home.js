import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MyButton from "../Component/MyButton";

const Home = () => {
  const navigate = useNavigate();

  const [script0, setScript0] = useState(0);

  const scriptList = [
    {
      no: 0,
      content: (
        <div>
          자고 일어나니 아무도 없다.
          <br />
          여긴 어디지? 참, 회사였지...
          <br />창 밖에서는 천둥번개가 치고 빗소리가 들린다.
          <div>
            <MyButton text={"> 다음으로"} onClick={() => setScript0(1)} />
          </div>
        </div>
      ),
    },
    {
      no: 1,
      content: (
        <div>
          <div>
            다들 어디 간 거지? 일단 불을 켜보자
            <div>
              <MyButton
                text={"불 켜기"}
                onClick={() => {
                  alert("딸깍");
                  setScript0(2);
                }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      no: 2,
      content: (
        <div>
          불이 켜지지 않는다. 정전이 된 것 같다.
          <br />
          배전함이 어디있더라?
        </div>
      ),
    },
  ];

  return (
    <div className="Home">
      <h2>회사 탈출하기</h2>
      {scriptList[script0].content}
      <div>
        {script0 === 2 ? (
          <div className="choose_list">
            <MyButton
              text={"회의실"}
              onClick={() => navigate("/seminarRoom")}
            />
            <MyButton
              text={"카페테리아"}
              onClick={() => navigate("/cafeteria")}
            />
            <MyButton
              text={"대표이사실"}
              onClick={() => navigate("/ceoRoom")}
            />
            <MyButton text={"화장실"} onClick={() => navigate("/toilet")} />
            <MyButton text={"출입구"} onClick={() => navigate("/exit")} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
