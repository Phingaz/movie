/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useFetch from "./components/utitlity/useFetch";

const Main = createContext();

export function MainCtxProvider(props) {
  const [option, setOption] = useState("now_playing");
  const [url, setUrl] = useState("movie");

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/${url}/${option}?language=en-US&page=1`,
    "GET"
  );

  useEffect(() => {
    setMovies(data?.results);
    const items = JSON.parse(localStorage.getItem("favoritesList"));
    if (items) {
      setFavorites(items);
    }
  }, [data?.results]);

  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [favorites, setFavorites] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const contextValue = {
    movie,
    movies,
    input,
    favorites,
    isPending,
    error,
    option,
    url,
    setOption,
    setInput,
    setMovieDetails,
    handleFavorites,
    addfavoritesListToStorage,
    setUrl,
    handleSubmit,
    handleChange,
  };

  return <Main.Provider value={contextValue}>{props.children}</Main.Provider>;
}

export default Main;
