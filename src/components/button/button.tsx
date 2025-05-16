import "./button_module.css";
import { useNavigate } from "react-router-dom";
export function Button() {
  const navigate = useNavigate();
  return (
    <button className="learning_button" onClick={() => navigate("/subpage")}>
      Learning more
    </button>
  );
}
