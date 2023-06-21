import { useNavigate } from "react-router-dom";
import MyButton from "../Component/MyButton";

const Toilet = () => {
  const navigate = useNavigate();
  return (
    <div className="Toilet">
      화장실
      <div>
        <MyButton text={"처음으로"} onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default Toilet;
