import { MainSections } from "../components/subPages/MainSections";
import { Wrapper } from "../components/utitlity/Wrapper";
import Main from "../Context";
import { useContext, useState } from "react";
import useFetch from "../components/utitlity/useFetch";
import { Loader } from "../components/utitlity/Loader";

export const SeeMore = () => {
  const { option } = useContext(Main);
  const [page, setPage] = useState(1);

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
    `https://api.themoviedb.org/3/movie/${option}?language=en-US&page=${page}`
  );

  const fetchData = (data) => {
    setPage(data);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      {isPending ? (
        <Loader />
      ) : !error.status ? (
        <MainSections
          title={title}
          data={data?.results}
          fetchData={fetchData}
          page={page}
          total_pages={data?.total_pages}
        />
      ) : (
        <p>Something went wrong, please try again later</p>
      )}
    </Wrapper>
  );
};
