/* eslint-disable react/prop-types */
import { MovieCard } from "../MovieCard";
import { useContext } from "react";
import Main from "../../Context";
import { DropDown } from "../utitlity/DropDown";
import { Link } from "react-router-dom";

export const Features = ({ data }) => {
  const { favorites } = useContext(Main);

  return (
    <section className="w-[min(90%,1300px)] mx-auto py-10">
      <div className="flex justify-between pb-10">
        <DropDown />
        <Link
          className="text-rose-500 font-semibold cursor-pointer tracking-tighter"
          to="/seemore"
        >
          See more &gt;
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-[1.5rem] gap-y-8 md:gap-8">
        {data?.map((movie) =>
          favorites.includes(movie.id) ? (
            <MovieCard key={movie.id} details={movie} favorites={true} />
          ) : (
            <MovieCard key={movie.id} details={movie} favorites={false} />
          )
        )}
      </div>
    </section>
  );
};
