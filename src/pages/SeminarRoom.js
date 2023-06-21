import { useNavigate } from "react-router-dom";
import MyButton from "../Component/MyButton";

const SeminarRoom = () => {
  const navigate = useNavigate();
  return (
    <div className="SeminarRoom">
      회의실
      <div>
        <MyButton text={"자리로 돌아가기"} onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default SeminarRoom;
