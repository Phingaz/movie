import { Wrapper } from "../components/utitlity/Wrapper";
import { Features } from "../components/subPages/Features";
import { HeroSection } from "../components/subPages/HeroSection";
import { Loader } from "../components/utitlity/Loader";
import { ErrorPage } from "../components/ErrorPage";
import Main from "../Context";
import { useContext, useEffect } from "react";
import { motion as m } from "framer-motion";
import ScrollToTop from "../components/utitlity/ScrollToTop";
import { fetchList } from "../components/data";
import { useLocation } from "react-router-dom";

export const Landing = () => {
  const { pathname } = useLocation();
  const path = pathname?.split("/")[1];

  const { movies, isPending, error, setUrl, setOption } = useContext(Main);

  useEffect(() => {
    if (path === "") {
      setUrl("movie");
      setOption("now_playing");
    }
  }, [path, setOption, setUrl]);

  const random = Math.floor(Math.random() * movies?.length);

  const hero = !isPending && movies ? movies[random] : null;

  const bgUrl = hero
    ? `https://image.tmdb.org/t/p/original/${hero?.backdrop_path}`
    : "";

  return (
    <>
      {isPending ? (
        <Loader />
      ) : !error.status ? (
          <Wrapper>
            <ScrollToTop />
            <m.div
              initial={{ opacity: 0.9, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ "--image-url": `url(${bgUrl})` }}
              className={`relative min-h-[500px] bg-[image:var(--image-url)] bg-gray-500 w-screen bg-no-repeat bg-cover bg-top `}
            >
              <div className="w-[min(90%,1300px)] mx-auto h-[calc(75vh+80px)] ">
                <HeroSection data={hero} />
              </div>
            </m.div>
            <Features data={movies} dropDownOptions={fetchList} />
          </Wrapper>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};
