/* eslint-disable react/prop-types */
import { MovieCard } from "../MovieCard";
import { DropDown } from "../utitlity/DropDown";
import { Link } from "react-router-dom";
import Main from "../../Context";
import { useContext } from "react";

export const Features = ({ data, dropDownOptions }) => {
  const { option, url } = useContext(Main);
  return (
    <section className="w-[min(90%,1300px)] mx-auto py-10">
      <div className="flex justify-between pb-10">
        <DropDown options={dropDownOptions} />
        <Link
          className="text-rose-800 font-semibold cursor-pointer tracking-tighter hover:text-rose-700"
          to={`/${url}/seemore/${option}`}
        >
          See more &gt;
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-[1.5rem] gap-y-8 md:gap-8">
        {data?.map((movie) => (
          <MovieCard key={movie.id} details={movie} />
        ))}
      </div>
    </section>
  );
};
