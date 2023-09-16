/* eslint-disable react/prop-types */
import { MovieCard } from "../MovieCard";
import Main from "../../Context";
import { useContext } from "react";

export const MainSections = ({ title, errorMessage, data }) => {
  const { input } = useContext(Main);

  return (
    <div className="bg-white w-screen z-[1] py-[100px]">
      <section className="w-[min(90%,1300px)] mx-auto py-2">
        <div className="flex justify-between pb-5">
          <h1 className="text-3xl font-bold text-red-900">{title}</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-[1.5rem] gap-y-8 md:gap-8">
          {input.trim().length > 1 && data?.length === 0 && (
            <p className="text-black whitespace-nowrap">{errorMessage}</p>
          )}

          {data?.map((movie) => (
            <MovieCard key={movie.id} details={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};
