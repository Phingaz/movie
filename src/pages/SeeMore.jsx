import { MainSections } from "../components/subPages/MainSections";
import { Wrapper } from "../components/utitlity/Wrapper";
import Main from "../Context";
import { useContext } from "react";

export const SeeMore = () => {
  const { option } = useContext(Main);
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

  return (
    <Wrapper>
      <MainSections title={title} />
    </Wrapper>
  );
};
