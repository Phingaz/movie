import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { MovieInfo } from "./pages/MovieInfo";
import { Search } from "./pages/Search";
import { SeeMore } from "./pages/SeeMore";
import { Favorites } from "./pages/Favorites";
import { TvSeries } from "./pages/TvSeries";
import Main from "./Context";
import { useContext } from "react";
import { ErrorPage } from "./components/ErrorPage";

export const App = () => {
  const { url, option } = useContext(Main);

  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    {
      path: `/${url}/search`,
      element: <Search />,
    },
    {
      path: `/${url}/seemore/${option}`,
      element: <SeeMore />,
    },
    { path: "/movies/:id", element: <MovieInfo /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/tvseries", element: <TvSeries /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return <RouterProvider router={router} />;
};
