/* eslint-disable react/prop-types */
import { MainSections } from "../components/subPages/MainSections";
import { Wrapper } from "../components/utitlity/Wrapper";
import useFetch from "../components/utitlity/useFetch";
import { Loader } from "../components/utitlity/Loader";
import ScrollToTop from "../components/utitlity/ScrollToTop";
import Main from "../Context";
import { useContext, useEffect } from "react";

export const SeeMore = () => {
  const { option, url, seemorePage, setSeemorePage } = useContext(Main);

  useEffect(() => {
    setSeemorePage(1);
  }, []);

  let title = "";

  switch (option) {
    case "now_playing":
      title = "Now Playing";
      break;
    case "popular":
      title = "Popular";
      break;
    case "upcoming":
      title = "Upcoming";
      break;
    case "top_rated":
      title = "Top rated";
      break;
    default:
      break;
  }

  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/${url}/${option}?language=en-US&page=${seemorePage}`
  );

  history.pushState(
    null,
    null,
    `/${url}/seemore/${option}?page=${seemorePage}`
  );

  return (
    <Wrapper>
      <ScrollToTop />
      {isPending ? (
        <Loader />
      ) : !error.status ? (
        <MainSections
          title={title}
          data={data?.results}
          page={seemorePage}
          total_pages={data?.total_pages}
        />
      ) : (
        <p>Something went wrong, please try again later</p>
      )}
    </Wrapper>
  );
};
