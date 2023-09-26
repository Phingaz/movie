import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, loader } from "./pages/Landing";
import { Login } from "./pages/Login";
import { IdInfo } from "./pages/IdInfo";
import { Search } from "./pages/Search";
import { SeeMore } from "./pages/SeeMore";
import { Favorites } from "./pages/Favorites";
import { TvSeries } from "./pages/TvSeries";
import Main from "./Context";
import { useContext } from "react";
import { ErrorPage } from "./components/ErrorPage";
import { Download } from "./pages/Download";

export const App = () => {
  const { url, option } = useContext(Main);

  const router = createBrowserRouter([
    { path: "/", element: <Landing />, loader: loader },
    { path: "/login", element: <Login /> },
    { path: `/${url}/search`, element: <Search /> },
    { path: `/${url}/seemore/${option}`, element: <SeeMore /> },
    { path: `/${url}_info/:id`, element: <IdInfo /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/tvseries", element: <TvSeries /> },
    { path: "/download", element: <Download /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return <RouterProvider router={router} />;
};
