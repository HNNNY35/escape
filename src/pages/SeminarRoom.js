import { useNavigate } from "react-router-dom";
import MyButton from "../Component/MyButton";

const SeminarRoom = () => {
  const navigate = useNavigate();
  return (
    <div className="SeminarRoom">
      회의실
      <div>
        <MyButton text={"처음으로"} onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default SeminarRoom;
