/* eslint-disable react/prop-types */
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

export const HeroSection = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies/" + data.id);
  };

  return (
    <main className="flex flex-col justify-center h-[100%] w-full md:w-6/12 text-white">
      <m.h1
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.005 }}
        className="md:text-6xl text-3xl font-bold leading-tighter mb-1 t"
      >
        {data?.title}
      </m.h1>
      <m.div
        initial={{ opacity: 0, y: -1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-4"
      ></m.div>
      <m.p
        initial={{ opacity: 0, y: -1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, type: "bounce" }}
        className="md:w-[70%] mb-5 t"
      >
        {data?.overview}
      </m.p>
      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="btn"
        onClick={handleClick}
      >
        {" "}
        <PlayCircleIcon /> Watch Trailer
      </m.button>
    </main>
  );
};
