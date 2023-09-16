import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Movies } from "./pages/Movies";
import { Search } from "./pages/Search";
import { SeeMore } from "./pages/SeeMore";

export const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    { path: "/search", element: <Search /> },
    { path: "/seemore", element: <SeeMore /> },
    { path: "/movies/:id", element: <Movies /> },
  ]);
  return <RouterProvider router={router} />;
};
