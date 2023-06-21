import { useNavigate } from "react-router-dom";
import MyButton from "../Component/MyButton";

const Exit = () => {
  const navigate = useNavigate();
  return (
    <div>
      출입구
      <div>
        <MyButton text={"자리로 돌아가기"} onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default Exit;
