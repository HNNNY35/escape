import { useNavigate } from "react-router-dom";
import MyButton from "../../Component/MyButton";

const Cafeteria = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h4>카페테리아</h4>
      <MyButton text={"게시판"} onClick={() => navigate("/cafeteria/board")} />
      <MyButton
        text={"배전함"}
        onClick={() => navigate("/cafeteria/switchBox")}
      />
      <MyButton
        text={"냉장고"}
        onClick={() => navigate("/cafeteria/refrigerator")}
      />
      <MyButton
        text={"커피머신"}
        onClick={() => navigate("/cafeteria/coffeeMachine")}
      />
      <div>
        <MyButton text={"처음으로"} onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default Cafeteria;
