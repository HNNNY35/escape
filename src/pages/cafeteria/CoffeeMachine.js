import { useState } from "react";
import MyButton from "../../Component/MyButton";
import { useNavigate } from "react-router-dom";

const CoffeeMachine = () => {
  const [coffeScript, setCoffeeScript] = useState(0);
  const navigate = useNavigate();

  const coffeeScriptList = [
    {
      no: 0,
      content: (
        <div>
          <div>캡슐 커피머신이다.</div>
          <MyButton text={"캡슐"} onClick={() => setCoffeeScript(1)} />
          <MyButton text={"커피머신"} onClick={() => setCoffeeScript(2)} />
          <div>
            <MyButton
              text={"카페테리아"}
              onClick={() => navigate("/cafeteria")}
            />
          </div>
        </div>
      ),
    },
    {
      no: 1,
      content: (
        <div>
          <div>알록달록한 캡슐들이 정리되어있다.</div>
          <div>
            <MyButton text={"뒤로가기"} onClick={() => setCoffeeScript(0)} />
          </div>
        </div>
      ),
    },
    {
      no: 2,
      content: (
        <div>
          이 늦은 시간에 커피를 마시는건 미친 짓이다..
          <div>
            <MyButton text={"뒤로가기"} onClick={() => setCoffeeScript(0)} />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="CoffeeMachine">
      <h2>커피머신</h2>
      {/* 불 꺼져있을 경우 */}
      <div>
        어두워서 잘 보이지 않는다. <br />
        일단 불부터 켜자.
      </div>
      {coffeeScriptList[coffeScript].content}
    </div>
  );
};

export default CoffeeMachine;
