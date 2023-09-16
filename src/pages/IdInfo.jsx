import { Movie } from "../components/Movie";
import { useParams } from "react-router-dom";
import { Video } from "../components/utitlity/Video";
import { Loader } from "../components/utitlity/Loader";
import { ErrorPage } from "../components/ErrorPage";
import { useContext } from "react";
import Main from "../Context";
import { Wrapper } from "../components/utitlity/Wrapper";
import ScrollToTop from "../components/utitlity/ScrollToTop";
import useFetch from "../components/utitlity/useFetch";

export const IdInfo = () => {
  const { id } = useParams();

  const { url } = useContext(Main);

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/${url}/${id}`
  );
  return (
    <>
      {isPending ? (
        <Loader />
      ) : !error.status ? (
        <Wrapper>
          <ScrollToTop />
          <div className="flex w-[min(90%,1300px)] mx-auto py-[50px]">
            <div className="flex-[9] flex flex-col pt-14 sm:pt-10 px-3 sm:px-10 lg:20">
              <div className="flex-1 min-h-[50vh] mb-5">
                <Video id={id} />
              </div>
              {data ? <Movie movieInfo={data} url={url} /> : <ErrorPage />}
            </div>
          </div>
        </Wrapper>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};
