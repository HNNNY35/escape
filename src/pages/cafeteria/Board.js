import { useNavigate } from "react-router-dom";
import MyButton from "../../Component/MyButton";

const Board = () => {
  const navigate = useNavigate();

  return (
    <div className="Board">
      <h2>게시판</h2>
      <img src={process.env.PUBLIC_URL + "/assets/board.png"} />
      <div>
        <MyButton text={"카페테리아"} onClick={() => navigate("/cafeteria")} />
      </div>
    </div>
  );
};

export default Board;
