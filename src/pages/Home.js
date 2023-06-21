import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyButton from "../Component/MyButton";

const Home = () => {
  const navigate = useNavigate();

  const [state, setState] = useState(0);

  return (
    <div className="Home">
      <h2>회사 탈출하기</h2>
      <div>
        자고 일어나니 아무도 없다.
        <br />
        여긴 어디지? 참, 회사였지...
        <br />
        창 밖에서는 천둥번개가 치고 빗소리가 들린다.
        <br />
        {/* 다음으로 넘어감 */}
        다들 어디 간 거지? 일단 불을 켜보자
        {/* 버튼으로 불 켜기 */}
        <br />
        불이 켜지지 않는다. 정전이 된 것 같다.
        <br />
        배전함이 어디있더라?
      </div>
      <div>
        <MyButton text={"회의실"} onClick={() => navigate("/seminarRoom")} />
        <MyButton text={"카페테리아"} onClick={() => navigate("/cafeteria")} />
        <MyButton text={"대표이사실"} onClick={() => navigate("/ceoRoom")} />
        <MyButton text={"화장실"} onClick={() => navigate("/toilet")} />
        <MyButton text={"출입구"} onClick={() => navigate("/exit")} />
      </div>
    </div>
  );
};

export default Home;
