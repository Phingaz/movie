import { MainSections } from "../components/subPages/MainSections";
import { Wrapper } from "../components/utitlity/Wrapper";
import Main from "../Context";
import useFetch from "../components/utitlity/useFetch";
import { useContext, useEffect } from "react";
import { Loader } from "../components/utitlity/Loader";
import { ErrorPage } from "../components/ErrorPage";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const { input, url, setUrl, setOption } = useContext(Main);
  const { pathname } = useLocation();
  const path = pathname?.split("/")[1];

  console.log(path);

  useEffect(() => {
    if (path === "tv") {
      setUrl("tv");
    } else {
      setUrl("movie");
    }
  }, [path, setOption, setUrl]);

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/search/${url}?query=${input}&include_adult=true&language=en-US&page=1, "GET"`
  );

  return (
    <Wrapper>
      {isPending ? (
        <Loader />
      ) : !error.status ? (
        <MainSections
          title="Search results"
          errorMessage=" Search result not found, please refine your search"
          data={data?.results}
        />
      ) : (
        <ErrorPage />
      )}
    </Wrapper>
  );
};
