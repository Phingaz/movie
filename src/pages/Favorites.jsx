import { MainSections } from "../components/subPages/MainSections";
import { Wrapper } from "../components/utitlity/Wrapper";
import Main from "../Context";
import { useContext } from "react";
import { BackButton } from "../components/utitlity/BackButton";

export const Favorites = () => {
  const { favoritesList } = useContext(Main);

  return (
    <Wrapper>
      {favoritesList.length === 0 ? (
        <div className="bg-white w-screen z-[1] py-[100px]">
          <section className="flex flex-col gap-5 w-[min(90%,1300px)] mx-auto py-2">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold text-red-900">Favorites</h1>
              <BackButton />
            </div>
          </section>
        </div>
      ) : (
        <MainSections title="Favorites" data={favoritesList} />
      )}
    </Wrapper>
  );
};
