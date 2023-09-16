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

  useEffect(() => {
    setMovies(data?.results);
    const items = JSON.parse(localStorage.getItem("favoritesList"));
    if (items) {
      setFavorites(items);
    }
  }, [data?.results]);

  const setMovieDetails = (data) => {
    setMovie(data);
  };

  const handleFavorites = (data) => {
    const isFavorite = favorites.some((item) => item.id === data.id);
    if (isFavorite) {
      setFavorites((p) => p.filter((item) => item.id !== data.id));
    } else {
      setFavorites((p) => [...p, data]);
    }
  };

  const addfavoritesListToStorage = (favorites) => {
    const stringifiedItem = JSON.stringify(favorites);
    localStorage.setItem("favoritesList", stringifiedItem);
  };

  const contextValue = {
    movie,
    movies,
    input,
    favorites,
    isPending,
    error,
    option,
    setOption,
    setInput,
    setMovieDetails,
    handleFavorites,
    addfavoritesListToStorage,
  };

  return <Main.Provider value={contextValue}>{props.children}</Main.Provider>;
}

export default Main;
