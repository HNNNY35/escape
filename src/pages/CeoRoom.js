import { useNavigate } from "react-router-dom";
import MyButton from "../Component/MyButton";

const CeoRoom = () => {
  const navigate = useNavigate();
  return (
    <div className="CeoRoom">
      대표이사실
      <div>
        <MyButton text={"처음으로"} onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default CeoRoom;
