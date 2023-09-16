import { Movie } from "../components/Movie";
import { Nav } from "../components/Navs/Nav";
import { useParams } from "react-router-dom";
import { Video } from "../components/utitlity/Video";
import { Loader } from "../components/utitlity/Loader";
import { ErrorPage } from "../components/ErrorPage";
import { useContext } from "react";
import Main from "../Context";

export const MovieInfo = () => {
  const { id } = useParams();

  const { movie, isPending } = useContext(Main);

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex h-[100svh] bg-white">
          <Nav />
          <div className="flex-[9] flex flex-col pt-14 sm:pt-10 px-3 sm:px-10 lg:20">
            <div className="flex-1 min-h-[50vh] mb-5">
              <Video id={id} />
            </div>
            {movie ? <Movie movieInfo={movie} /> : <ErrorPage />}
          </div>
        </div>
      )}
    </>
  );
};
