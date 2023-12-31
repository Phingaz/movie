/* eslint-disable react/prop-types */
import FavoriteIcon from "@mui/icons-material/Favorite";
import imgP from "./asset/imgPlaceholder.jpg";
import { moveiGenreId, tvShowGenreId } from "./data";
import Main from "../Context";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

export const MovieCard = ({ details }) => {
  const {
    handleFavorites,
    favorites,
    addfavoritesListToStorage,
    url,
  } = useContext(Main);

  const scrollRef = useRef(null);

  const navigate = useNavigate();

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";
  const img = details?.poster_path ? baseImgUrl + details.poster_path : imgP;

  useEffect(() => {
    addfavoritesListToStorage(favorites);
  }, [addfavoritesListToStorage, details, favorites]);

  const showType = url === "tv" ? tvShowGenreId : moveiGenreId;
  const genre = details.genre_ids.map((el) => {
    let g = [];
    showType?.map((ele) => {
      if (el === ele.id) {
        g.push(ele.name);
      }
    });
    return g;
  });

  const showDate = url === "tv" ? details.first_air_date : details.release_date;
  const dateObject = new Date(showDate);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObject.toLocaleDateString(undefined, options);

  const handlClick = () => {
    navigate(`/${url}_info/${details.id}`);
  };

  const addToFavorites = (e, item) => {
    e.stopPropagation();
    handleFavorites(item);
  };

  const isFavorite = favorites.some((item) => item.id === details.id);

  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
      viewport={{ scrollRef, margin: "-35px" }}
      onClick={handlClick}
      className="flex flex-col gap-1 border b transition-all hover:s hover:rounded-lg z-0 p-2 rounded-xl b bg-rose-50 bg-opacity-40"
    >
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full min-h-[45px] flex justify-between items-center p-2 z-[10]">
          <p className="text-white t bg-gray-400 bg-opacity-60 px-2 py-1 rounded-lg">
            {url === "tv" ? "Tv series" : "Movie"}
          </p>

          <p
            className={`bg-white bg-opacity-30 text-gray-900 rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer hover:opacity-100 hover:l transition-all`}
          >
            <FavoriteIcon
              className={`w-full h-full p-1 hover:opacity-100 z-[11] ${
                isFavorite
                  ? "opacity-100 text-rose-600 "
                  : "text-white opacity-60"
              }`}
              onClick={(e) => addToFavorites(e, details)}
            />
          </p>
        </div>
        <img
          src={img}
          className="w-full object-contain object-center cursor-pointer rounded-lg pb-1"
          alt="poster-img"
        />
      </div>

      <h2 className="text-red-900 font-bold md:text-lg lg:text-xl tracking-tight capitalize">
        {url === "tv" ? details.name : details.title}
      </h2>

      <div>
        <p className="text-red-800 font-semibold text-[13px]">
          {formattedDate}
        </p>
      </div>

      <div className="flex flex-wrap gap-1">
        {genre.map((el, i) => (
          <p key={i} className="font-base text-red-900 text-[12px]">
            {el}
            {i + 1 === genre.length ? "" : ","}
          </p>
        ))}
      </div>
    </m.div>
  );
};
