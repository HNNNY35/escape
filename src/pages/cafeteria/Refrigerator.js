import { useNavigate } from "react-router-dom";
import MyButton from "../../Component/MyButton";

const Refrigerator = () => {
  const navigate = useNavigate();
  return (
    <div className="Refrigerator">
      <h2>냉장고</h2>
      <div>냉장고엔 생수 3병과 누군가 넣어둔 삼각김밥이 보인다.</div>
      <MyButton text={"카페테리아"} onClick={() => navigate("/cafeteria")} />
      <MyButton text={"자리로 돌아가기"} onClick={() => navigate("/")} />
    </div>
  );
};

export default Refrigerator;
