import { MainSections } from "../components/subPages/MainSections";
import { Wrapper } from "../components/utitlity/Wrapper";
import Main from "../Context";
import useFetch from "../components/utitlity/useFetch";
import { useContext } from "react";
import { Loader } from "../components/utitlity/Loader";
import { ErrorPage } from "../components/ErrorPage";

export const Search = () => {
  const { input } = useContext(Main);

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1, "GET"`
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
