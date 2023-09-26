/* eslint-disable react/prop-types */
import { MovieCard } from "../MovieCard";
import Main from "../../Context";
import { useContext } from "react";
import { BackButton } from "../utitlity/BackButton";
import ScrollToTop from "../utitlity/ScrollToTop";
import { NextPage } from "../utitlity/NextPage";

export const MainSections = ({ title, errorMessage, data, total_pages }) => {
  const { input, increasePage, seemorePage, setSeemorePage, reducePage } =
    useContext(Main);

  return (
    <div className="bg-white w-screen z-[1] py-[100px]">
      <ScrollToTop />
      <section className="flex flex-col gap-5 w-[min(90%,1300px)] mx-auto py-2">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-red-900">{title}</h1>
          <BackButton />
        </div>
        <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-[1.5rem] gap-y-8 md:gap-8 mb-5">
          {input.trim().length > 1 && data?.length === 0 && (
            <p className="text-black whitespace-nowrap">{errorMessage}</p>
          )}

          {data?.map((movie) => (
            <MovieCard key={movie.id} details={movie} />
          ))}
        </div>
        {total_pages > 0 && (
          <NextPage
            reducePage={() => reducePage(setSeemorePage)}
            page={seemorePage}
            total_pages={total_pages}
            increasePage={() => increasePage(setSeemorePage)}
          />
        )}
      </section>
    </div>
  );
};
