import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-rose-200 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:l"
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon className="text-rose-900" />
    </div>
  );
};
