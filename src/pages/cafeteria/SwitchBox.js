import { useNavigate } from "react-router-dom";
import MyButton from "../../Component/MyButton";
import { useState } from "react";

const SwitchBox = () => {
  const navigate = useNavigate();

  const [imgClick, setImgClick] = useState(false);
  const [switchAnswer, setSwitchAnswer] = useState("");

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  // 배전함 문제 - 쪽지
  const unlockSwitchBox = () => {
    if (switchAnswer === "716254") {
      <MyButton text={"불 켜기"} />;
      alert("정답!!");
    } else {
      alert("땡! 자물쇠 비밀번호를 다시 입력해주세요.");
    }
  };

  return (
    <div>
      <h2>배전함</h2>
      <div>
        배전함이 보인다.
        <br />
        자물쇠로 잠겨있다.
        <br />
        자물쇠는 6자리 숫자 비밀번호이다.
        <br />
        쪽지가 붙어있는것 같다.
        <br />
        <div>
          <MyButton
            text={"쪽지 보기"}
            onClick={() => {
              setImgClick(!imgClick);
            }}
          />
          <input
            type="text"
            className="switchBox-answer"
            onChange={(e) => setSwitchAnswer(e.target.value)}
          />
          <MyButton text={"자물쇠 열기"} onClick={unlockSwitchBox} />
          <MyButton
            text={"카페테리아"}
            onClick={() => navigate("/cafeteria")}
          />
        </div>
        <div>
          {imgClick && (
            <img src={process.env.PUBLIC_URL + "/assets/switchBox_Q.png"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SwitchBox;
