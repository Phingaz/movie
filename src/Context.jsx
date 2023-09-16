/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useFetch from "./components/utitlity/useFetch";

const Main = createContext();

export function MainCtxProvider(props) {
  const [option, setOption] = useState("now_playing");

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1`,
    "GET"
  );

  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    setMovies(data?.results);
  }, [data?.results]);

  const setMovieDetails = (data) => {
    setMovie(data);
  };

  const handleFavorites = (data) => {
    favorites.length > 0
      ? favorites.includes(data.id)
        ? setFavorites((p) => p.filter((item) => item !== data.id))
        : setFavorites((p) => [...p, data.id])
      : setFavorites((p) => [...p, data.id]);
    setFavoritesList((p) => [...p, data]);
  };

  const contextValue = {
    movie,
    movies,
    favoritesList,
    input,
    favorites,
    isPending,
    error,
    option,
    setOption,
    setInput,
    setMovieDetails,
    handleFavorites,
  };

  return <Main.Provider value={contextValue}>{props.children}</Main.Provider>;
}

export default Main;
