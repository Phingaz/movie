/* eslint-disable react/prop-types */
import { MovieCard } from "../MovieCard";
import Main from "../../Context";
import { useContext } from "react";
import { BackButton } from "../utitlity/BackButton";

export const MainSections = ({
  title,
  errorMessage,
  data,
  fetchData,
  total_pages,
}) => {
  const { input } = useContext(Main);
  const pagination = [];
  for (let i = 1; i < total_pages; i++) {
    pagination.push(i);
  }

  return (
    <div className="bg-white w-screen z-[1] py-[100px]">
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
        <div className="flex flex-row justify-start items-center gap-5 cursor-pointer h-[60px] overflow-x-scroll px-5">
          {total_pages > 0 &&
            pagination.map((el) => (
              <p
                key={el}
                className="font-semibold text-rose-800 text-lg hover:text-rose-600 transition-all duration-200 hover:l"
                onClick={() => fetchData(el)}
              >
                {el}
              </p>
            ))}
        </div>
      </section>
    </div>
  );
};
